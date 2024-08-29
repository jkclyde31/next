"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Footer from "./app/component/sections/Footer";
import Header from "./app/component/sections/Header";
import { MyFunComponent } from "./app/component/MyFunComponent";
import NotFound from "./app/component/NotFound";
import PrimaryButton from "./app/component/PrimaryButton";
import CustomizableForm from "./app/component/CustomContact";

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