import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DescriptionIcon from '@material-ui/icons/Description';

const Headerbottom = () => {
  return (
    <div className="hbelow">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="below">
              <div className="icon">
                <DescriptionIcon/>
              </div>
              <h2 className="heading1">
                All the courses are prepared by industry experts.
                Start learning today
                </h2>
              
            </div>
          </div>

          <div className="col-4">
            <div className="below">
              <div className="icon">
              <HomeIcon/>
              </div>
              <h2 className="heading1">
              Master skills with in-depth learning
              Explore high-demand courses
                </h2>
                
             
            </div>
          </div>

          <div className="col-4">
            <div className="below">
              <div className="icon">
             < FavoriteIcon/>
              </div>
              <h2 className="heading1">
              Flexible and affordable learning environment
              Choose your own learning pace
                </h2>
                
            </div>
          </div>
          </div>
          </div>

    </div>
  );
};

export default Headerbottom;
