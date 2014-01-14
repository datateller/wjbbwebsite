from django.conf.urls import patterns, include, url
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'wjbbweb.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', 'apphome.views.index', name='index'),
    url(r'^index$', 'apphome.views.index', name='index'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^sellers/', include('sellers.urls')),
    url(r'^apphome/', include('apphome.urls')),
) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
