import React , {useEffect, useState} from 'react';
import style from './tourist.module.css'
import PageWrapper from '../PageWrapper'
import {Container} from 'react-bootstrap'

export default function ForTourist ({match:{params: {id}}}){
    

    // const id = parseInt(id)
    const [guide, setGuide] = useState(null)
    useEffect(()=>{
        fetch(`http://localhost:1717/guides/${id}`)
        .then(response=>{
            if(!response.ok) throw new Error('guide not found')
            return response.json()
        }) 
        .then((data)=>{
            setGuide(data)
        }) 
    },[])
    return (
        <PageWrapper>
            <Container>
                <div key={guide && guide.id} style={{display:'flex', flexDirection:'column'}}>
                    <span>{guide && guide.name}</span>
                    <span>{guide && guide.age}</span>
                    <span>{guide && guide.language}</span>
                    <span>{guide && guide.transport}</span>
                    <span>{guide && guide.quiantity}</span>
                    <span>{guide && guide.about}</span>
                    <span>{guide && guide.available}</span>
                    <div>{guide && guide.tours.map(pack=>(
                        <div key={pack.index}>
                            <span>{pack.place}</span>
                            <span>{pack.day}</span>
                            <span>{pack.price}</span>
                        </div>
                    ))}</div>
                    <div>
                        <span>{guide && guide.contacts.whatsapp} </span>
                        <span>{guide && guide.contacts.telegram} </span>
                        <span>{guide && guide.contacts.instagram} </span>
                    </div>

                </div>
            </Container>
            
        </PageWrapper>
    )
}