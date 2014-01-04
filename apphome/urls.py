'''
Created on Nov 2, 2013

@author: shengeng
'''
from django.conf.urls import patterns, url


urlpatterns = patterns('',
    url(r'^$', 'apphome.views.index', name='index'),
    url(r'^index$', 'apphome.views.index', name='index'),
    url(r'^download$', 'apphome.views.download', name='download'),
)