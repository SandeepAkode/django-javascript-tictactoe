from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'tictactoe/index.html')


def particles(request):
    return render(request, 'tictactoe/particles.html')
