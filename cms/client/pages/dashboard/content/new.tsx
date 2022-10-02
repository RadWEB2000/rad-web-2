import { NextPage } from "next";
import "easymde/dist/easymde.min.css";

import Link from "next/link";
import { Menu } from "../../../components/Menu";
import { useRef, useState } from 'react';
import SimpleMDE, { SimpleMdeReact } from "react-simplemde-editor";
import { stringify } from "querystring";
import { posts } from "../../../data/posts";
const Page:NextPage = () => {
    const [content,setContent] = useState('');
    const [formValues,setFormValues] = useState({
        title:'',
        path:'',
        meta:{
            title:'',
            description:'',
        },
        author:'',
        category:'',
        publish:{
            time:'',
            release:''
        },
        excerpt:'',
        image:'',
        content:JSON.stringify(content)
     })

     const formRef = useRef(null);

     const handleSubmit = (e:any) => {
        e.preventDefault();
        const getElemet = e.target.elements;
        const formElements = {
            author:getElemet.author.value,
            category:getElemet.category.value,
            excerpt:getElemet.excerpt.value,
            graphic:getElemet.graphic.value,
            meta:{
                description:getElemet.metaDescription.value,
                title:getElemet.metaTitle.value,
            },
            path:getElemet.path.value,
            publish:{
                release:getElemet.publishRelease.value,
                time:getElemet.publishTime.value,
            },
            title:getElemet.title.value,
        }
        const {author,category,excerpt,graphic,meta,path,publish,title} = formElements;
        // posts.push(formElements)
        if(author !== '' && category !== '' && excerpt !== '' && graphic !== '' && meta.title !== '' && meta.description !== '' && path !== '' && publish.release !== '' && publish.time !== '' && title !== ''){
            alert('pola formularza nie są puste')
        }else(
            alert('pola formularza są puste')
        )
     }
const [image,setImage] = useState('');
    return(
        <>
            <Menu/>
            <h1>stwórz nowy artykuł</h1>
            <form onSubmit={handleSubmit} ref={formRef}>
                    <div>
                        <label htmlFor="">Tytuł</label>
                        <input type="text" name="title" id="" />
                        <p>/70</p>
                    </div>
                    <div>
                        <label htmlFor="">Ścieżka</label>
                        <input type="text" name="path" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Meta title</label>
                        <input type="text" name="metaTitle" id="" />
                        <p>/60</p>
                    </div>
                    <div>
                        <label htmlFor="">Meta descipriton</label>
                        <input type="text" name="metaDescription" id="" />
                        <p>/130</p>
                    </div>
                    <div>
                        <label htmlFor="">Autor</label>
                        <select name="author" id="">
                            <option value="radoslaw_adamczyk">Radosław Adamczyk</option>
                            <option value="filip_bukowiecki">Filip Bukowiecki</option>
                            <option value="klaudia_paluch">Klaudia Paluch</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Kategoria</label>
                        <select name="category" id="">
                            <option value="programowanie">Programowanie</option>
                            <option value="historia">Historia</option>
                            <option value="pozycjonowanie">Pozycjonowanie</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Publikacja - pokazywany czas</label>
                        <input type="date" name="publishTime" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Publikacja - od</label>
                        <input type="date" name="publishRelease" id="" />
                    </div>

                    <div>
                        <label htmlFor="">Zajawka</label>
                        <textarea name="excerpt" id=""></textarea>
                    </div>
                    <div>
                        <label htmlFor="">Grafika</label>
                        <input type="url" name="graphic" id="" onInput={(e:any) => setImage(e.target.value)} />
                        {
                            image &&
                            <img src={image} alt="" width={320} height={450} />
                        }
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <SimpleMdeReact 
                           value={content} 
                           onChange={(value) => setContent(value)}
                        />
                    </div>
                    <button>zapisz</button>
            </form>
        </>
    )
}
export default Page;