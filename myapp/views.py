from django.shortcuts import render

from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, Django!")

from django.shortcuts import render
from django.shortcuts import render

def home(request):
    return render(request, 'myapp/home.html')