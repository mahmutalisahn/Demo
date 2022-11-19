# Generated by Django 3.2.5 on 2022-11-19 10:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tutorials', '0002_alter_tutorial_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tutorial',
            old_name='title',
            new_name='brand',
        ),
        migrations.RenameField(
            model_name='tutorial',
            old_name='description',
            new_name='model',
        ),
        migrations.RemoveField(
            model_name='tutorial',
            name='published',
        ),
        migrations.AddField(
            model_name='tutorial',
            name='category',
            field=models.CharField(default='', max_length=70),
        ),
        migrations.AddField(
            model_name='tutorial',
            name='weight',
            field=models.IntegerField(default=0),
        ),
    ]
