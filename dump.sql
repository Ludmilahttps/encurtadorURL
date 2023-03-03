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
-- Name: urls; Type: TABLE; Schema: public; Owner: gktekganbhlupj
--

CREATE TABLE "public"."urls" (
    "id" integer NOT NULL,
    "url" "text" NOT NULL,
    "shortUrl" "text" NOT NULL,
    "visitCount" bigint DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE public.urls OWNER TO gktekganbhlupj;

--
-- Name: urlsUsers; Type: TABLE; Schema: public; Owner: gktekganbhlupj
--

CREATE TABLE "public"."urlsUsers" (
    "id" integer NOT NULL,
    "urlId" integer NOT NULL,
    "userid" integer NOT NULL
);


ALTER TABLE public."urlsUsers" OWNER TO gktekganbhlupj;

--
-- Name: urlsUsers_id_seq; Type: SEQUENCE; Schema: public; Owner: gktekganbhlupj
--

CREATE SEQUENCE "public"."urlsUsers_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."urlsUsers_id_seq" OWNER TO gktekganbhlupj;

--
-- Name: urlsUsers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gktekganbhlupj
--

ALTER SEQUENCE "public"."urlsUsers_id_seq" OWNED BY "public"."urlsUsers"."id";


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: gktekganbhlupj
--

CREATE SEQUENCE "public"."urls_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO gktekganbhlupj;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gktekganbhlupj
--

ALTER SEQUENCE "public"."urls_id_seq" OWNED BY "public"."urls"."id";


--
-- Name: users; Type: TABLE; Schema: public; Owner: gktekganbhlupj
--

CREATE TABLE "public"."users" (
    "id" integer NOT NULL,
    "name" character varying(127) NOT NULL,
    "email" character varying(255) NOT NULL,
    "password" character varying(63) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE public.users OWNER TO gktekganbhlupj;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: gktekganbhlupj
--

CREATE SEQUENCE "public"."users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO gktekganbhlupj;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gktekganbhlupj
--

ALTER SEQUENCE "public"."users_id_seq" OWNED BY "public"."users"."id";


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: gktekganbhlupj
--

ALTER TABLE ONLY "public"."urls" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."urls_id_seq"'::"regclass");


--
-- Name: urlsUsers id; Type: DEFAULT; Schema: public; Owner: gktekganbhlupj
--

ALTER TABLE ONLY "public"."urlsUsers" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."urlsUsers_id_seq"'::"regclass");


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: gktekganbhlupj
--

ALTER TABLE ONLY "public"."users" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."users_id_seq"'::"regclass");


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: gktekganbhlupj
--

COPY "public"."urls" ("id", "url", "shortUrl", "visitCount", "createdAt") FROM stdin;
4	https://ihateregex.io/expr/url/	yS28gKnI8V	0	2022-08-04 20:59:16.736323
5	https://idere.io/expr/url/	Bm2NOryYCD	0	2022-08-04 21:40:12.335885
6	https://idere.io/expr/url/	ejrv_Zhoum	0	2022-08-04 21:40:14.244159
7	https://idere.io/expr/url/	eK7eAvhvCE	0	2022-08-04 21:40:15.707813
8	https://iderde.io/expr/url/	EBfQWPgMwb	0	2022-08-04 21:43:11.465863
9	https://idfe.io/expr/url/	-AV1wU8HA9	0	2022-08-04 21:44:34.282487
11	https://ihateregex.io/expr/ur/	XicCri65tE	0	2022-08-05 15:00:53.644376
12	https://google.com	CAf7_g_scE	0	2022-08-05 17:40:07.516063
18	https://google.com	DyYw2g_2iT	0	2022-08-05 18:42:39.461821
19	https://google.com	_zYQSHqbfk	2	2022-08-05 18:43:02.933934
20	https://google.com.br	4P85IttAhR	0	2022-08-05 18:50:17.340312
21	https://google.com.en	NTZv8PS6gs	0	2022-08-05 18:50:31.473926
22	https://google.com.dd	cdqfzkV9wI	0	2022-08-05 18:50:45.283896
23	https://googlde.com.dd	AJNpiXCbVY	0	2022-08-05 18:50:55.724793
17	https://google.com	KyifogWiV_	3	2022-08-05 18:42:39.45823
24	https://googlde.com.dd	f_vRIRFEVr	6	2022-08-05 18:58:26.502466
10	https://ihateregex.io/expr/url/	Z6MAXSVQnD	10	2022-08-05 13:27:51.92108
3	https://ihateregex.io/expr/url/	bQ7Jhh7AJa	3	2022-08-04 20:58:33.412479
\.


--
-- Data for Name: urlsUsers; Type: TABLE DATA; Schema: public; Owner: gktekganbhlupj
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
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: gktekganbhlupj
--

COPY "public"."users" ("id", "name", "email", "password", "createdAt") FROM stdin;
1	Lucas Borges	lucas@gmail.com	senha_forte	2022-08-03 13:05:35.234457
2	joao	joao@gmail.com	aaaa	2022-08-03 14:39:42.650992
3	João	joao@driven.com.br	$2b$10$/HgZNn9H6hH9M8rKisXZh.zXMszsPYguhO6rNEXYdPkuNJW4EEq1S	2022-08-03 14:40:32.477196
4	João	joao@driven.com	$2b$10$4Z3FW4gkqUr9z9TJmuHLGOT/qFuVKJNxGgZSFNIdrRAUA33Cflnkq	2022-08-03 14:42:25.012815
5	João	joao@drivn.com	$2b$10$q65/5V/QTDv95vUDQs8vT.l9XJDAuBjr/dBOC6vS1MBRwN3Numo8a	2022-08-03 14:42:39.072779
6	lucas	l@g.com	$2b$10$XmmrCRIhJDWd2PfX.gSfJOQwZ/16MMHJ86dDtNDHYyKxBTKpjbEcy	2022-08-03 16:05:00.750967
7	lucas	lu@g.com	$2b$10$ejMdq8dpl6kanKZjmR5yQOWA.3rfVlqsBpxEB7k2EnqIyGLoW19dm	2022-08-03 20:00:19.034583
8	lucas	a@g.com	$2b$10$oUwTvowYJO6uWK87eyiqr.6QunSfOPEoA5dTKFVKxyPP699aZf2y.	2022-08-03 20:04:45.929968
9	lucas	b@g.com	$2b$10$Toipw0NUjsAbbu2MYs3pQuSfF9t2JHiIAOzYYcQLm6hVyC5.qezhe	2022-08-03 20:08:54.4437
10	lucas	c@g.com	$2b$10$DHbtisQ6QcjzU4pCoRqTl.X6GOPcpySZJjjfrv5R4zCov4nwXQWVq	2022-08-03 20:10:55.228204
11	lucas	d@g.com	$2b$10$xcC0RfpS3lkij31O.If/muu0Z3qKv9ulLmqHtD8AqYop7UOWE..fK	2022-08-03 20:11:19.430733
12	lucas	dd@g.com	$2b$10$0Gj4vlo.gPRLh8HUofTTzeUZ4ikNa/wff7Hx7LyBrwgmaI9tMuPdu	2022-08-04 15:15:53.622192
13	claudio	x@g.com	$2b$10$62ncjZTOShtAbVT2jI0s/ubJCUQz/qz2vTY09fYgpmi1dicUHejnC	2022-08-05 18:42:01.968543
14	ana	ana@g.com	$2b$10$WJ2M8qtoHUNV22FDrTuXW.hriSDHv4ogUDgpVnXdgiZm3gvB4cW5a	2022-08-05 18:42:08.93056
15	CLARICES	CLA@g.com	$2b$10$3rP8vEN22263YRC.aURLiOgtLavzVHsAuG6YqCsOz4uRAu7RoF0bG	2022-08-05 18:57:34.343096
\.


--
-- Name: urlsUsers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gktekganbhlupj
--

SELECT pg_catalog.setval('"public"."urlsUsers_id_seq"', 53, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gktekganbhlupj
--

SELECT pg_catalog.setval('"public"."urls_id_seq"', 56, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gktekganbhlupj
--

SELECT pg_catalog.setval('"public"."users_id_seq"', 47, true);


--
-- Name: urlsUsers urlsUsers_pkey; Type: CONSTRAINT; Schema: public; Owner: gktekganbhlupj
--

ALTER TABLE ONLY "public"."urlsUsers"
    ADD CONSTRAINT "urlsUsers_pkey" PRIMARY KEY ("id");


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: gktekganbhlupj
--

ALTER TABLE ONLY "public"."urls"
    ADD CONSTRAINT "urls_pkey" PRIMARY KEY ("id");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: gktekganbhlupj
--

ALTER TABLE ONLY "public"."users"
    ADD CONSTRAINT "users_email_key" UNIQUE ("email");


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: gktekganbhlupj
--

ALTER TABLE ONLY "public"."users"
    ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");


--
-- Name: urlsUsers urlsUsers_urlId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gktekganbhlupj
--

ALTER TABLE ONLY "public"."urlsUsers"
    ADD CONSTRAINT "urlsUsers_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "public"."urls"("id");


--
-- Name: urlsUsers urlsUsers_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gktekganbhlupj
--

ALTER TABLE ONLY "public"."urlsUsers"
    ADD CONSTRAINT "urlsUsers_userid_fkey" FOREIGN KEY ("userid") REFERENCES "public"."users"("id");


--
-- PostgreSQL database dump complete
--
