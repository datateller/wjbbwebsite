# -*- coding: utf-8 -*-
'''
Created on 2013年12月31日

@author: shengeng
'''

from django import forms
from django.core.exceptions import ValidationError
from django.db import models
from django.contrib.auth.models import User 
from sellers.models import SellerBusiness

def validate_username(username):
    if User.objects.filter(username=username).exists():
        raise ValidationError(u'%s 已经被注册' % username)


class RegisterForm(forms.Form):

    email = forms.EmailField(validators=[validate_username],required=True,widget=forms.EmailInput(attrs={'placeholder':'请输入您的邮件地址' , ' class':'form-control','style':"width: 50%;",'autofocus':'autofocus','required':'required'}))
    password = forms.CharField(required=True,widget=forms.PasswordInput(attrs={'placeholder':'请设置您到登录密码' , ' class':'form-control','style':"width: 50%;",'required':'required'}))
    password_again = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder':'请再次输入您的登录密码' , ' class':'form-control','style':"width: 50%;",'required':'required'}))
    address = forms.CharField(required=True,widget=forms.TextInput(attrs={'placeholder':'请输入您的具体地址' , ' class':'form-control','required':'required'}))
    description = forms.CharField(required=True,widget=forms.Textarea(attrs={'placeholder':'请输入关于您的商业描述' , ' class':'form-control','required':'required'}))
    agree = forms.NullBooleanField(widget=forms.CheckboxInput(attrs={'required':'required'}))
    
    def clean(self):
        cleaned_data = super(RegisterForm, self).clean()
        if cleaned_data['password'] != cleaned_data['password_again']:
            self._errors["password_again"] = self.error_class([u"密码不一致"])
            #del cleaned_data['password_again']
        return cleaned_data
    
# class PostForm(forms.Form):
#     title = forms.CharField(required=True,widget=forms.TextInput(attrs={'placeholder':'请输入您的标题' , ' class':'form-control','required':'required','autofocus':'autofocus'}))
#     content = forms.CharField(required=True,widget=forms.Textarea(attrs={'placeholder':'请输入您要发布的具体信息' , ' class':'form-control','required':'required'}))
#     photo = forms.ImageField()
    
class PostModelForm(forms.ModelForm):
    def clean_photo(self):
        photo = self.cleaned_data.get('photo', False)
        if photo:
            print "###photo size:", photo._size
            if photo._size > 4 * 1024 * 1024:
                print "###photo too size"
            return photo
    class Meta:
        model = SellerBusiness
        fields = ('title', 'content', 'photo', 'photo1')
        widgets = {
            'title':forms.TextInput(attrs={'placeholder':'请输入您的标题' , ' class':'form-control','required':'required','autofocus':'autofocus'}),
            'content':forms.Textarea(attrs={'placeholder':'请输入您要发布的具体信息' , ' class':'form-control','required':'required'}), 
	    #'photo':forms.FileInput(attrs={'onclick':'addImage()'}),
	    'photo':forms.FileInput(attrs={'onclick':'document.getElementById(\'id_photo1\').style=\'visibility:visible\';'}),
	    'photo1':forms.FileInput(attrs={'style':'visibility:hidden', 'onclick':'document.getElementById(\'id_photo2\').style=\'visibility:visible\';' }),
	    'photo2':forms.FileInput(attrs={'style':'visibility:hidden'})
		}
    
