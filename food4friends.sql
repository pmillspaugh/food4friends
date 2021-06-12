CREATE TABLE public.users (
  "_id" serial primary key,
  "name" varchar NOT NULL,
  "user_auth_token" varchar NOT NULL
);

CREATE TABLE public.posts (
  "_id" serial primary key,
  "category" varchar NOT NULL,
  "content" varchar NOT NULL,
  "date" timestamp NOT NULL,
  "creator_id" bigint references public.users 
);

CREATE TABLE public.followers (
  "_id" serial primary key,
  "user_id" bigint references public.users,
  "follower_id" bigint references public.users
);

CREATE TABLE public.likes (
  "_id" serial primary key,
  "user_id" bigint references public.users,
  "post_id" bigint references public.posts
);

INSERT INTO public.users (name, user_auth_token) VALUES ('Hamillionaire', '$8183A');
INSERT INTO public.users (name, user_auth_token) VALUES ('Abitlate', 'Kh#81');
INSERT INTO public.users (name, user_auth_token) VALUES ('Scrummaster9000', '09fhj!');
INSERT INTO public.users (name, user_auth_token) VALUES ('Qyu', 'kgnjah9');


