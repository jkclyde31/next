"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";

import { MyFunComponent } from "./app/component/MyFunComponent";
import PrimaryButton from "./app/component/PrimaryButton";
import CustomizableForm from "./app/component/CustomContact";
import GalleryComponent from "./app/component/CustomGallery";
import ServicesComponent from "./app/component/Services";

// builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

builder.init("2fa337738072419589aaa019bd9defbc");

Builder.registerComponent(Counter, {
  name: "Counter",
});

Builder.registerComponent(PrimaryButton, {
  name: 'Primary Button',
  inputs: [
    {
      name: 'text',
      type: 'string',
      defaultValue: 'Click me',
    },
    {
      name: 'width',
      type: 'string',
      defaultValue: '200px',
    },
    {
      name: 'className',
      type: 'string',
    },
    {
      name: 'customStyles',
      type: 'object',
    },
  ],

  
});

Builder.registerComponent(MyFunComponent, {
  name: "MyFunComponent",
  inputs: [{ name: "text", type: "string", defaultValue: "Hello, Builder!" }],
  defaults: {
    //defaultStyles
  },
});



Builder.registerComponent(CustomizableForm, {
  name: 'Customizable Form',
  inputs: [
    {
      name: 'fields',
      type: 'list',
      subFields: [
        {
          name: 'name',
          type: 'string',
        },
        {
          name: 'label',
          type: 'string',
        },
        {
          name: 'type',
          type: 'string',
          enum: ['text', 'email', 'number', 'textarea'],
        },
        {
          name: 'required',
          type: 'boolean',
        },
      ],
    },
    {
      name: 'submitButtonText',
      type: 'string',
      defaultValue: 'Submit',
    },
    {
      name: 'backgroundColor',
      type: 'string',
      defaultValue: 'bg-white',
    },
    {
      name: 'textColor',
      type: 'string',
      defaultValue: 'text-gray-800',
    },
  ],
});

Builder.registerComponent(GalleryComponent, {
  name: 'Stylish Gallery',
  inputs: [
    {
      name: 'images',
      type: 'list',
      subFields: [
        {
          name: 'src',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
          required: true,
        },
        {
          name: 'alt',
          type: 'string',
          defaultValue: 'Gallery image',
        },
      ],
    },
    {
      name: 'columns',
      type: 'number',
      defaultValue: 3,
      min: 1,
      max: 4,
      step: 1,
    },
    {
      name: 'gap',
      type: 'number',
      defaultValue: 4,
      min: 0,
      max: 8,
      step: 1,
    },
    {
      name: 'rounded',
      type: 'boolean',
      defaultValue: true,
    },
  ],
});



Builder.registerComponent(ServicesComponent, {
  name: 'Interior Design Services',
  inputs: [
    {
      name: 'customClasses',
      type: 'string',
      defaultValue: '',
      helperText: 'Add custom classes separated by commas'
    },
    {
      name: 'serviceTitleFontSize',
      type: 'enum',
      enum: ['lg', 'xl', '2xl'],
      defaultValue: 'xl'
    },
    {
      name: 'serviceTitleFontFamily',
      type: 'enum',
      enum: ['sans', 'serif', 'mono'],
      defaultValue: 'sans'
    },
    {
      name: 'descriptionFontSize',
      type: 'enum',
      enum: ['sm', 'base', 'lg'],
      defaultValue: 'base'
    },
    {
      name: 'descriptionFontFamily',
      type: 'enum',
      enum: ['sans', 'serif', 'mono'],
      defaultValue: 'sans'
    },
    {
      name: 'services',
      type: 'list',
      defaultValue: [],
      subFields: [
        {
          name: 'title',
          type: 'string',
          defaultValue: 'Service Title'
        },
        {
          name: 'description',
          type: 'longText',
          defaultValue: 'Service description goes here'
        },
        {
          name: 'image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: false,
        },
      ]
    }
  ],
});
