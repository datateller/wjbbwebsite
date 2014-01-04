from django.template.loader import get_template
from django.http import HttpResponse
from django.template import Context

def index(request):
    t = get_template('apphome/index.html')
    html = t.render(Context())
    return HttpResponse(html)


def download(request):
    t = get_template('apphome/download.html')
    html = t.render(Context())
    return HttpResponse(html)
