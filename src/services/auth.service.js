import http from '../helpers/axios';

class AuthService {
  static login(email, password){
    const response = http.post('/login', {email, password})
    return response;
  }

  static signUp(name, email, password){
    const response = http.post('/signup', {name, email, password})
    return response;
  }
}

export default AuthService;