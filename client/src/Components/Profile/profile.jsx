import "./style/profleStyle.css"
import EditIcon from '@material-ui/icons/Edit'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Link } from 'react-router-dom'

import { defaultImageLink } from '../../store'

function Profile () {
  return (
    <div className="">
      <div className="page-content page-container" id="page-content">
        <div className="padding flex-centering-item">
          <div className="row container d-flex justify-content-center">
              <div className="col-xl-12 col-md-12">
                  <div className="pro-card user-card-full">
                      <div className="row m-l-0 m-r-0">
                          <div className="col-lg-4 col-md-12 col-sm-12 bg-c-lite-green user-profile">
                              <div className="card-block text-center text-white">
                                  <div className="m-b-25">
                                    <img className="profile-avatar img-radius" src={ defaultImageLink } width="80px" height="80px" alt="User-Profile-Image" />
                                  </div>
                                  <h6 className="f-w-600">Hembo Tingor</h6>
                                  <p>Store manager</p>
                                  <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                              </div>
                          </div>
                          <div className="col-lg-8 col-md-12 col-sm-12">
                              <div className="card-block">
                                  <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                  <div className="row">
                                      <div className="col-sm-6">
                                          <p className="m-b-10 f-w-600">Email</p>
                                          <h6 className="text-muted f-w-400">umarov.doniyor.2001@gmail.com</h6>
                                      </div>
                                      <div className="col-sm-6">
                                          <p className="m-b-10 f-w-600">Phone</p>
                                          <h6 className="text-muted f-w-400">+998934642001</h6>
                                      </div>
                                  </div>
                                  <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Store(s)</h6>
                                  <div className="row">
                                      <div className="col-sm-6">
                                          <p className="m-b-10 f-w-600">Book Store</p>
                                          <h6 className="text-muted f-w-400">Tashkent, Uzbekistan</h6>
                                      </div>
                                      <div className="col-sm-6">
                                          <p className="m-b-10 f-w-600">E-commerce</p>
                                          <h6 className="text-muted f-w-400">London, UK</h6>
                                      </div>
                                  </div>
                                  <ul className="social-link list-unstyled m-t-40 m-b-10">
                                      <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                      <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                      <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
      <div className="profile-settings-container">
        <div className="profile-settings-container-cover">
          <button className="btn btn-warning profile-settings-container-cover-button profile-settings-container-cover-button-edit flex-centering-item">
            <span>Edit</span>
            <EditIcon className="profile-settings-container-cover-button-icon" />
          </button>
          <Link to="/login" className="btn btn-primary profile-settings-container-cover-button profile-settings-container-cover-button-edit flex-centering-item">
            <span>Logout</span>
            <ExitToAppIcon className="profile-settings-container-cover-button-icon" />
          </Link>
          <button className="btn btn-danger profile-settings-container-cover-button profile-settings-container-cover-button-delete flex-centering-item">
            <span>Delete accout</span>
            <DeleteForeverIcon className="profile-settings-container-cover-button-icon" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile