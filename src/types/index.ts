export type Campus = 'playschool' | 'regular';

export type EventItem = {
  image_url: string | undefined;
  id: string;
  title: string;
  description?: string;
  campus: string;
  start_date?: string; // ISO string
  end_date?: string;
  location?: string;
  featured?: boolean;
  created_by?: string;
  created_at?: string;
};

export interface Enquiry {
  id?: string;
  campus: Campus;
  parent_name: string;
  parent_email: string;
  parent_phone: string;
  child_name: string;
  child_dob: string;
  class_grade: string;
  message?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  created_at?: string;
}

export interface GalleryImage {
  id: string;
  campus: Campus | 'both';
  title: string;
  description?: string;
  image_url: string;
  category: string;
  display_order: number;
  is_featured: boolean;
  created_at: string;
}

export interface Event {
  id: string;
  campus: Campus | 'both';
  title: string;
  description: string;
  event_date: string;
  event_time?: string;
  location: string;
  image_url?: string;
  is_published: boolean;
  created_at: string;
}

export interface Testimonial {
  id: string;
  campus: Campus | 'both';
  parent_name: string;
  child_grade: string;
  testimonial_text: string;
  rating: number;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
}

export interface Faculty {
  id: string;
  campus: Campus | 'both';
  name: string;
  designation: string;
  subject?: string;
  photo_url?: string;
  bio?: string;
  display_order: number;
  is_published: boolean;
  created_at: string;
}
