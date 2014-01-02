'''
Created on Nov 2, 2013

@author: shengeng
'''
from django.conf.urls import patterns, url

from .views import HomeView, RegisterView, PostView, BListView

urlpatterns = patterns('',
    url(r'^$', HomeView.as_view(), name='home'),
    url(r'^register/', RegisterView.as_view(success_url='/sellers/'), name='register'),
    url(r'^post/', PostView.as_view(success_url='/sellers/blist/'), name='post'),
    url(r'^blist/', BListView.as_view(), name='blist'),
)