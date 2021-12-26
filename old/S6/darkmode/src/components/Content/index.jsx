import React from 'react'
import { ThemeContext } from 'context/ThemeContext'
import './Content.css'
const Content = () => {

  const {theme} = React.useContext(ThemeContext)
  const {patate} = React.useContext(ThemeContext)

  return (
    <div className={theme ? 'Content go-light' : 'Content go-dark'}>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare ultrices eleifend. Maecenas sit amet scelerisque magna, et imperdiet velit. Integer eu nibh dui. Quisque lectus odio, congue sit amet tincidunt non, imperdiet quis neque. Pellentesque eleifend hendrerit metus, vel pellentesque nunc luctus ut. Sed sed arcu dictum, molestie risus in, gravida felis. Vestibulum pretium arcu leo, a maximus metus imperdiet et. Vestibulum eu scelerisque augue, eget volutpat sem. Praesent ipsum nisl, sodales ac placerat nec, faucibus nec libero. Vestibulum ultrices lorem ac arcu eleifend, sit amet ornare justo efficitur. Nam interdum eget urna at aliquam. Nullam sapien neque, ullamcorper vulputate est sit amet, tristique ornare augue. Fusce lacinia purus in purus porttitor laoreet. Sed vel faucibus velit.</p>
      <p>Etiam dignissim posuere mauris, quis suscipit quam posuere id. Cras nec scelerisque risus, at porttitor tellus. Nulla luctus pharetra varius. Nunc pharetra semper dui, quis suscipit ipsum semper ultrices. Vestibulum lacinia posuere massa, et auctor nisi convallis ut. Nunc ligula ipsum, congue nec tristique at, fermentum malesuada turpis. Vestibulum elementum, magna ac semper convallis, nisl tellus maximus tortor, eget hendrerit ipsum neque a mi. Curabitur sit amet sem a ligula fringilla fringilla non eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi vitae efficitur tellus. Sed ultricies dolor nunc, et lacinia enim placerat ac. Sed venenatis risus id dolor fermentum hendrerit. Vestibulum vel porta dui. Pellentesque ac augue dapibus, dapibus odio eu, laoreet est. Pellentesque sodales diam euismod pulvinar condimentum.</p>
      <p>Curabitur tortor felis, imperdiet ut dapibus ultrices, faucibus sed velit. Vestibulum laoreet sed mi quis consequat. Etiam tempor, tellus nec maximus accumsan, arcu libero vestibulum lorem, sed commodo velit enim vitae justo. Aliquam et risus maximus, finibus orci sit amet, viverra sem. Nunc sit amet malesuada dolor. Sed dolor risus, tincidunt at volutpat et, aliquam a sapien. Duis sapien ligula, fermentum ut condimentum nec, porta non massa. Maecenas scelerisque et elit id pretium. Morbi eleifend lorem non nibh mattis bibendum. Maecenas volutpat mi in neque rutrum suscipit. Proin mollis placerat justo. Maecenas at dictum ante, sit amet interdum augue. Aenean eget ullamcorper felis.</p>
      <p>Maecenas convallis nibh eget dolor maximus, nec malesuada diam convallis. Maecenas ultrices vestibulum feugiat. Maecenas varius eget eros in accumsan. Nunc dapibus cursus ligula, non facilisis justo fermentum et. Nunc arcu tellus, convallis id lorem non, iaculis commodo mauris. Donec interdum porta porttitor. In quis mollis diam, hendrerit hendrerit dolor. Phasellus finibus odio tincidunt, finibus turpis id, fermentum lorem. Pellentesque in pharetra justo.</p>
      <p>In hac habitasse platea dictumst. Proin turpis tortor, placerat at mauris in, luctus aliquam nunc. Vestibulum nec tellus vitae dui feugiat vulputate quis nec magna. Ut arcu sapien, convallis eget enim non, auctor placerat est. Donec lacinia dui vel felis iaculis vestibulum. Duis maximus, sapien in blandit tincidunt, mauris dui ullamcorper nisl, a iaculis felis neque vel eros. Donec sed finibus leo. Mauris leo dolor, porttitor eget vestibulum non, lacinia et ex. Proin vel ex ut ex eleifend dictum. Nunc tortor libero, bibendum ut mollis quis, vestibulum nec justo. Pellentesque semper tincidunt mauris, vitae egestas ante congue et. Morbi lectus arcu, rhoncus quis blandit eget, elementum nec purus. Etiam orci neque, egestas non condimentum in, aliquam ac ante. In vehicula vitae arcu vitae pulvinar. Nulla facilisi.</p>
      {theme}
      {patate}
    </div>
  )
}
    
export default Content
