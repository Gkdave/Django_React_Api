from django.contrib import admin
from .models import Employee 
# Register your models here.
class EmployeeAdmin(admin.ModelAdmin):
    list_display=('name','email')
    list_editable=('emp_id',)
    search_fields=('name',)
    list_filter=('email',)
    list_per_page=4

    admin.site.register(Employee)
