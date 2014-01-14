from django.shortcuts import render
from django.http import *
from django.views.generic import FormView
from django.views.generic.base import TemplateView
from django.views.generic.edit import FormView, ProcessFormView
from django.contrib.auth.models import User 
from django.contrib.auth import authenticate, login as user_login, logout as user_logout
from django import forms
from .forms import *
from .models import *


class HomeView(TemplateView):
    template_name = 'sellers/home.html'
    def get_context_data(self, **kwargs):
        context = super(HomeView, self).get_context_data(**kwargs)
        
        ###process login form
        login_username = self.request.GET.get("login_username")
        login_password = self.request.GET.get("login_password")
        if login_username and login_password:
            login_username = login_username.replace('%40','@')
            print(login_username, login_password)
            user = authenticate(username=login_username, password=login_password)
            if user is not None:
                print(user)
                if user.is_active:
                    print(user)
                    user_login(self.request, user)
                    context['username_authed'] = login_username
                    context['bpost_count'] = 5
        ###process logout form
        if "logout" in self.request.GET:
            user_logout(self.request)
        return context

class BListView(TemplateView):
    template_name = 'sellers/blist.html'
    def get_context_data(self, **kwargs):
        context = super(BListView, self).get_context_data(**kwargs)
        
        ###process login form
        login_username = self.request.GET.get("login_username")
        login_password = self.request.GET.get("login_password")
        if login_username and login_password:
            user = authenticate(username=login_username, password=login_password)
            if user is not None:
                if user.is_active:
                    user_login(self.request, user)
                    context['username_authed'] = login_username
        ###process logout form
        if "logout" in self.request.GET:
            user_logout(self.request)
        user = self.request.user
        blist = []
        blist = SellerBusiness.objects.filter(seller__username = user.username)
        context['blist'] = blist
        return context

class RegisterView(FormView):
    template_name = 'sellers/register.html'
    form_class = RegisterForm
    def get_context_data(self, **kwargs):
        context = super(RegisterView, self).get_context_data(**kwargs)
        if self.request.method == 'GET':
            ###process login form
            login_username = self.request.GET.get("login_username")
            login_password = self.request.GET.get("login_password")
            if login_username and login_password:
                user = authenticate(username=login_username, password=login_password)
                if user is not None:
                    if user.is_active:
                        user_login(self.request, user)
                        context['username_authed'] = login_username
            ###process logout form
            if "logout" in self.request.GET:
                user_logout(self.request)
            context['form_reg'] = RegisterForm()
            context['registered'] = False
            
        ###process register form
        if self.request.method == 'POST':
            form_reg = RegisterForm(self.request.POST)
            if form_reg.is_valid():
                user = User.objects.create(username = form_reg.cleaned_data['email'],
                                            password = form_reg.cleaned_data['password'],
                                            email = form_reg.cleaned_data['email'])
                seller = Seller.objects.create()
                seller.user = user
                seller.address = form_reg.cleaned_data['address']
                seller.description = form_reg.cleaned_data['description']
                user.save()
                seller.save()
                print(form_reg)
                context['registered'] = True
                context['form_reg'] = form_reg
                context['result_msg'] = '注册成功！'
            else:
                print(form_reg)
                context['form_reg'] = form_reg
                context['registered'] = False
            
        return context

    def form_valid(self, form):
        # This method is called when valid form data has been POSTed.
        # It should return an HttpResponse.
        ###process register form
        if self.request.method == 'POST':
            form_reg = RegisterForm(self.request.POST)
            if form_reg.is_valid():
                username = form_reg.cleaned_data['email']
                user = User.objects.create_user(username = username,
                                            password = form_reg.cleaned_data['password'],
                                            email = form_reg.cleaned_data['email'])
                seller = Seller.objects.create(user = user)
                seller.address = form_reg.cleaned_data['address']
                seller.description = form_reg.cleaned_data['description']
                user.save()
                seller.save()
                print(form_reg)
            else:
                print(form_reg)
        return super(RegisterView, self).form_valid(form)


class PostView(FormView):
    template_name = 'sellers/post.html'
    form_class = PostModelForm
    def get_context_data(self, **kwargs):
        context = super(PostView, self).get_context_data(**kwargs)
        if self.request.method == 'GET':
            ###process login form
            login_username = self.request.GET.get("login_username")
            login_password = self.request.GET.get("login_password")
            if login_username and login_password:
                user = authenticate(username=login_username, password=login_password)
                if user is not None:
                    if user.is_active:
                        user_login(self.request, user)
                        context['username_authed'] = login_username
            ###process logout form
            if "logout" in self.request.GET:
                user_logout(self.request)
            context['form_post'] = PostModelForm()
            
        if self.request.method == 'POST':
            form_post = PostModelForm(self.request.POST, self.request.FILES)
            if form_post.is_valid():
                temp = form_post.save(commit=False)
                temp.seller = self.request.user
                temp.save()
            else:
                print(form_post.errors)
                context['form_post'] = form_post
        return context

    def form_valid(self, form):
        # This method is called when valid form data has been POSTed.
        # It should return an HttpResponse.
        ###process register form
        if self.request.method == 'POST':
            form_post = PostModelForm(self.request.POST, self.request.FILES)
            if form_post.is_valid():
                temp = form_post.save(commit=False)
                temp.seller = self.request.user
                if self.request.FILES:
                    temp.photo = self.request.FILES['photo']
                temp.save()
            else:
                print(form_post.errors)
                print("form_post not valid")
        return super(PostView, self).form_valid(form)
