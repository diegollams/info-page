var ProgressBar = React.createClass({
    componentDidMount: function () {
        // var progress = this.props.progress;
        // setTimeout(()=> this.setProgress(progress),1000);
        this.setProgress(this.props.progress);
    },
    setProgress: function (progress) {
        if(this.state.progress == this.props.progress){
            return;
        }
            this.setState({progress: this.state.progress + 1});
            setTimeout(()=> this.setProgress(progress),50);
    },
    getInitialState: function () {
      return {progress: 0}
    },
   render: function () {
       var percentage = this.state.progress + '%';
       return (
           <div class="row">
               <h4 className='text-muted'>
                   {this.props.message}
                   <div className="text-right">{percentage}</div>
               </h4>
               <div className="progress ">
                   <div className="progress-bar progress-bar-custom" role="progressbar" aria-valuenow={this.state.progress} aria-valuemin="0" aria-valuemax="100" style={{width: percentage}}>
                       <span className="sr-only">60% Complete</span>
                   </div>
               </div>
           </div>
       )
   }
});