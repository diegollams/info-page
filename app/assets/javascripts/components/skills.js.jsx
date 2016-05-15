var Skills = React.createClass({
    getInitialState: function () {
        return {skills: false}
    },
    showSkills: function () {
        this.setState({skills: !this.state.skills});
    },
   render: function () {
       var skills = null,images = null,toggleButton = null,toggleMessage = this.state.skills ? "Contact" : 'Skills';
       toggleButton = <button onClick={this.showSkills} className="btn btn-primary" data-placement="right" data-toggle="tooltip" title="Click for info">{toggleMessage}</button>;
       var skillsArray = [{name: 'Ruby on Rails',percentage: 80,image: this.props.images.rails},{name: 'Javascript',percentage: 80,image: this.props.images.js},{name: 'ReactJs',percentage: 80,image: this.props.images.reactjs},{name: 'Android',percentage: 90,image: this.props.images.android},{name: 'C++',percentage: 70,image: this.props.images.cplusplus},{name: 'Swift',percentage: 60,image: this.props.images.swift}];
       if(this.state.skills){
           skills =
               <div className="container">
                   {skillsArray.map(function (skill) {
                       return <div className="row" key={skill.name}>
                                   <div className='col-sm-1'><img className="icon" src={skill.image}/></div>
                                   <div className="col-sm-11 vertical-align ">
                                       <ProgressBar progress={skill.percentage} message={skill.name}/>
                                   </div>
                               </div>
                   }.bind(this))}
                   {toggleButton}
               </div>;

       }else{
           images = <ul className="list-inline">
               <li data-placement="left" data-toggle="tooltip" title="Projects">
                   <a href="https://github.com/diegollams">
                       <img className="icon" src={this.props.images.github}/>
                   </a>
               </li>
               <li data-placement="bottom" data-toggle="tooltip" title="Resume">
                   <a href="https://mx.linkedin.com/in/diegollamas">
                       <img className="icon" src={this.props.images.linkedin}/>
                   </a>
               </li>
               <li>{toggleButton}</li>
           </ul>;

       }


       return (
           <div>
               <header className="vertical-center">
                   <h1 className="text-center">
                       Diego Llamas Velasco
                       <small>
                           <a data-placement="bottom" data-toggle="tooltip" href="mailto:diegollams@gmail.com" title="" data-original-title="Mail me">diegollams@gmail.com</a>
                       </small>
                   </h1>
                   {images}
                   {skills}

               </header>

           </div>
       )
   }
});
