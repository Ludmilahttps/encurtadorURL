--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4 (Ubuntu 14.4-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."urls" (
    "id" integer NOT NULL,
    "url" "text" NOT NULL,
    "shortUrl" "text" NOT NULL,
    "visitCount" bigint DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE ONLY public.urls;

--
-- Name: urlsUsers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."urlsUsers" (
    "id" integer NOT NULL,
    "urlId" integer NOT NULL,
    "userid" integer NOT NULL
);


ALTER TABLE ONLY public."urlsUsers";

--
-- Name: urlsUsers_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."urlsUsers_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ONLY public."urlsUsers_id_seq";

--
-- Name: urlsUsers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."urlsUsers_id_seq" OWNED BY "public"."urlsUsers"."id";


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."urls_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ONLY public.urls_id_seq;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."urls_id_seq" OWNED BY "public"."urls"."id";


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."users" (
    "id" integer NOT NULL,
    "name" character varying(127) NOT NULL,
    "email" character varying(255) NOT NULL,
    "password" character varying(63) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE ONLY public.users;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ONLY public.users_id_seq;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."users_id_seq" OWNED BY "public"."users"."id";


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."urls" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."urls_id_seq"'::"regclass");


--
-- Name: urlsUsers id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."urlsUsers" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."urlsUsers_id_seq"'::"regclass");


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."users" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."users_id_seq"'::"regclass");


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."urls" ("id", "url", "shortUrl", "visitCount", "createdAt") FROM stdin;
1	https://google.com	4P85IttAhR	0	2022-08-05 17:40:07.516063
2	https://google.com.br	4P85IttAhR	0	2022-08-05 18:50:17.340312
\.


--
-- Data for Name: urlsUsers; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."urlsUsers" ("id", "urlId", "userid") FROM stdin;
1	4	6
2	5	6
3	6	6
4	7	6
5	8	6
6	9	6
7	10	11
8	11	6
9	12	6
14	17	13
15	18	13
16	19	14
17	20	14
18	21	14
19	22	14
20	23	14
21	24	15
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."users" ("id", "name", "email", "password", "createdAt") FROM stdin;
1	ludhy	ludmila.https@gmail.com	12345	2022-08-03 13:05:35.234457
2	joana	joana@gmail.com	aaaa	2022-08-03 14:39:42.650992
3	lucas	lucas@gmail.com	bbbb	2022-08-04 15:15:53.622192
\.


--
-- Name: urlsUsers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."urlsUsers_id_seq"', 53, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."urls_id_seq"', 56, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."users_id_seq"', 47, true);


--
-- Name: urlsUsers urlsUsers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."urlsUsers"
    ADD CONSTRAINT "urlsUsers_pkey" PRIMARY KEY ("id");


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."urls"
    ADD CONSTRAINT "urls_pkey" PRIMARY KEY ("id");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."users"
    ADD CONSTRAINT "users_email_key" UNIQUE ("email");


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."users"
    ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");


--
-- Name: urlsUsers urlsUsers_urlId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."urlsUsers"
    ADD CONSTRAINT "urlsUsers_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "public"."urls"("id");


--
-- Name: urlsUsers urlsUsers_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."urlsUsers"
    ADD CONSTRAINT "urlsUsers_userid_fkey" FOREIGN KEY ("userid") REFERENCES "public"."users"("id");


--
-- PostgreSQL database dump complete
--
