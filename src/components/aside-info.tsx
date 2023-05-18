
import { Mail, Smartphone, MapPin } from 'lucide-react'
import { ContainerInfo } from '../components/container-info'
import { Info } from './info'

export function AsideInfo () {
  return (
    <div className="w-52 h-full flex flex-col justify-between gap-4 p-2">

      <ContainerInfo title='Informações de contato'>
      
      <Info icon={<MapPin size={16} />} description='Endereço'/>
      <Info icon={<Smartphone size={16} />} description='(81) 99999-9999'/>
      <Info icon={<Mail size={16} />} description='seuemail@gmail.com'/>
      </ContainerInfo>

      <ContainerInfo 
      title="Objetivo profissional" 
      description='Um breve resumo de seus objetivos de carreira e o tipo de posição que você está buscando'
      />
      <ContainerInfo 
      title="Resumo profissional" 
      description='Destaque suas principais habilidades, experiências e realizações relevantes para a posição desejada.'
      />
      
    </div>
  )
}