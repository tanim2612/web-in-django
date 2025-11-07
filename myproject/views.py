from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.


def homePage(request):
    data={
        'title': 'Home Page new',
        'message': 'Welcome to the Home Page!',
        'list': ['item1', 'item2', 'item3'],
        'number': [1, 2, 3, 4, 5],
        'student_details': [
            {'name': 'John Doe', 'age': 20, 'grade': 'A'},
            {'name': 'Jane Smith', 'age': 22, 'grade': 'B'},
        ]
    }
    # Render the 'index.html' template with the provided data
    # Ensure the template is located in the 'templetes' directory as specified in settings
    return render(request,"index.html",data)

def aboutUS(request):
    return HttpResponse("<h1>About Us</h1><p>This is the about us page.</p>")


def Course(request):
    return HttpResponse("<h1>Course</h1><p>This is the course page.</p>")


def CourseDetail(request, course_id):
    return HttpResponse(course_id)

