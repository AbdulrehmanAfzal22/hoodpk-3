import {Instagram,ArrowUpRight} from 'lucide-react';
import '../styles/instagram-embeds.css';
const posts=['DBwr0LLAWsV','CWRcowvqlMw','C_8sILuu5_Z'];
export default function InstagramPostEmbeds(){
 return <section className="hood-instagram-embeds" aria-labelledby="hood-instagram-title"><header><div><p className="eyebrow">@thehood.pk</p><h2 id="hood-instagram-title">On Instagram</h2></div><a href="https://www.instagram.com/thehood.pk/" target="_blank" rel="noopener noreferrer">View profile <ArrowUpRight size={16}/></a></header><div className="hood-instagram-embeds__grid">{posts.map((id,index)=><article key={id}><iframe src={`https://www.instagram.com/p/${id}/embed/`} title={`THE HOOD Instagram post ${index+1}`} loading="lazy" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/><a href={`https://www.instagram.com/p/${id}/`} target="_blank" rel="noopener noreferrer"><Instagram size={16}/> Open on Instagram <ArrowUpRight size={14}/></a></article>)}</div></section>;
}
