
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router';
import Button from '../../component/Button';
import { UserAPI } from '../../services/UserApi';
import {useNavigate} from "react-router-dom"
import Bagde from '../../component/Bagde';

const UserDetail = () => {
    const [user,setUser]=useState({});
    const [repos,setRepos]=useState({});
    const navigate=useNavigate()
    

    const urlParams=useParams();
    const {login}= urlParams
    const empty = <h1>No Data-2</h1>

    useEffect(()=>{
        const fetchUserDetail =async ()=>{
            try{
                const apiUserDetail= await UserAPI.fetchUserInfo(login);      
                const apiResponseRepos=await UserAPI.fetchUserRepos(login);
                
                setUser(apiUserDetail.data);      
                setRepos(apiResponseRepos.data);

            }catch(error){
            console.log(error);
            }
        }
        fetchUserDetail();
    },[]);

    const {
    avatar_url,
    name,
    company,
    login: username,
    location,
    hireable,
    html_url,
    public_gists,
    following,
    followers,
    public_repos,
    } = user;
    const onBacktoHome=()=>{
        navigate("/")
    }

    const sectionGeneralInfo =(
        <>
            <div className="user-general-info__left col-12 col-md-5">
                <img src={avatar_url} alt={name} />
                <h3>{name}</h3>
                {location && (<p><strong>Location: </strong>{location}</p>)}
            </div>
            <div className="user-general-info__right col-12 col-md-7">
                <p><strong>Username: </strong>{username}</p>
                <p><strong>Company: </strong>{company}</p>
                <a href={html_url} target="blank" >
                    <Button label='Visit github profile'  />
                </a>
            

            </div>        
        </>

    )

    const sectionStats =(
        <>
            <Bagde title={`Followers: ${followers}`} type={1} />
            <Bagde title={`Following: ${following}`} type={2}/>
            <Bagde title={`Public gists: ${public_gists}`}type={3} />
            <Bagde title={`Public repos: ${public_repos}`}type={4} />
        </>
    );
    

  return (
    <div className="user-detail-container mt-5">
      <div className="user-controller mb-3">
          <Button onClick={onBacktoHome} className="me-1">
            <i className="fa fa-arrow-left me-2"> </i>
            <span>Back to Home</span>
          </Button>
          <span>
            <strong>Hireable: </strong>
            {" "}
            {
                hireable? 
                (<i className="fa fa-check-circle text-success"></i>)
                :
                (<i className="fa fa-check-circle text-danger"></i>)
            }
          </span>
                
      </div>
      <div className="user-general-info section-border row mb-3">{sectionGeneralInfo}</div>
      <div className="user-stats-info section-border mb-3">{sectionStats}</div>
    </div>
  )
}

export default UserDetail;