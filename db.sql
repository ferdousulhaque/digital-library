--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2 (Debian 16.2-1.pgdg120+2)
-- Dumped by pg_dump version 16.2 (Debian 16.2-1.pgdg120+2)

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
-- Name: books; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.books (
    id integer NOT NULL,
    title character varying(255),
    author character varying(255),
    "publicationYear" character varying(4),
    summary character varying(1000),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    _search tsvector
);


ALTER TABLE public.books OWNER TO admin;

--
-- Name: books_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.books_id_seq OWNER TO admin;

--
-- Name: books_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;


--
-- Name: books id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public.books (id, title, author, "publicationYear", summary, "createdAt", "updatedAt", _search) VALUES (6, 'The wind in the willows', 'Kenneth Grahame', '1980', 'The escapades of four animal friends who live along a river in the English countryside--Toad, Mole, Rat, and Badger', '2024-03-10 13:56:11.565+00', '2024-03-10 13:56:11.565+00', '''along'':16 ''anim'':12 ''badger'':27 ''countrysid'':22 ''english'':21 ''escapad'':9 ''four'':11 ''friend'':13 ''graham'':7 ''kenneth'':6 ''live'':15 ''mole'':24 ''rat'':25 ''river'':18 ''toad'':23 ''willow'':5 ''wind'':2');
INSERT INTO public.books (id, title, author, "publicationYear", summary, "createdAt", "updatedAt", _search) VALUES (7, 'The call of the wild', 'Mitsu Yamamoto, Jack London, Pablo Marcos Studio', '1989', 'A dog is forcibly taken to Alaska where he eventually becomes a leader of a wolfpack', '2024-03-10 13:57:31.352+00', '2024-03-10 13:57:31.352+00', '''alaska'':19 ''becom'':23 ''call'':2 ''dog'':14 ''eventu'':22 ''forcibl'':16 ''jack'':8 ''leader'':25 ''london'':9 ''marco'':11 ''mitsu'':6 ''pablo'':10 ''studio'':12 ''taken'':17 ''wild'':5 ''wolfpack'':28 ''yamamoto'':7');
INSERT INTO public.books (id, title, author, "publicationYear", summary, "createdAt", "updatedAt", _search) VALUES (8, 'Animal farm', 'George Orwell', '1946', 'Satire on dictatorship', '2024-03-10 13:57:41.229+00', '2024-03-10 13:57:41.229+00', '''anim'':1 ''dictatorship'':7 ''farm'':2 ''georg'':3 ''orwel'':4 ''satir'':5');
INSERT INTO public.books (id, title, author, "publicationYear", summary, "createdAt", "updatedAt", _search) VALUES (9, 'The three musketeers', 'Alexandre Dumas', '2017', 'An abridged edition of Alexandre Dumas''s flamboyant tale of action and adventure in seventeenth-century France.', '2024-03-10 13:57:56.275+00', '2024-03-10 13:57:56.275+00', '''abridg'':7 ''action'':16 ''adventur'':18 ''alexandr'':4,10 ''centuri'':22 ''duma'':5,11 ''edit'':8 ''flamboy'':13 ''franc'':23 ''musket'':3 ''seventeenth'':21 ''seventeenth-centuri'':20 ''tale'':14 ''three'':2');


--
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.books_id_seq', 9, true);


--
-- Name: books_search; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX books_search ON public.books USING gin (_search);


--
-- Name: books books_vector_update; Type: TRIGGER; Schema: public; Owner: admin
--

CREATE TRIGGER books_vector_update BEFORE INSERT OR UPDATE ON public.books FOR EACH ROW EXECUTE FUNCTION tsvector_update_trigger('_search', 'pg_catalog.english', 'title', 'author', 'summary');


--
-- PostgreSQL database dump complete
--
