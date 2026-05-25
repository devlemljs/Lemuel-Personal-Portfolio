
import React from 'react';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Recognition {
  title: string;
  icon: React.ReactNode;
}

export interface Feedback {
  name: string;
  role: string;
  content: string;
}

export interface Blog {
  id: string;
  title: string;
  date: string;
  preview: string;
  content: string;
  category: 'Personal' | 'Professional';
}
