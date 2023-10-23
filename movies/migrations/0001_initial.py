# Generated by Django 3.2.22 on 2023-10-23 06:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import taggit.managers


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('taggit', '0005_auto_20220424_2025'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('title', models.CharField(max_length=255)),
                ('release', models.CharField(max_length=50)),
                ('director', models.CharField(max_length=75)),
                ('content', models.TextField(blank=True)),
                ('image', models.ImageField(blank=True, default='../static/pp5test/default_user_fqnvic', upload_to='pp5test/')),
                ('categories', taggit.managers.TaggableManager(help_text='A comma-separated list of categories.', through='taggit.TaggedItem', to='taggit.Tag', verbose_name='Categories')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
    ]
