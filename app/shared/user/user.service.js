"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(config_1.Config.apiUrl + 'Users', JSON.stringify({
            Username: user.email,
            Email: user.email,
            Password: user.password
        }), { headers: headers })
            .catch(this.handleErrors);
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLHNDQUFtRDtBQUNuRCw4QkFBa0M7QUFDbEMsZ0NBQTZCO0FBQzdCLGlDQUE4QjtBQUc5QixvQ0FBZ0M7QUFHaEMsSUFBYSxXQUFXO0lBQ3RCLHFCQUFvQixJQUFTO1FBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztJQUU3QixDQUFDO0lBQ0QsOEJBQVEsR0FBUixVQUFTLElBQVM7UUFDaEIsSUFBSSxPQUFPLEdBQUMsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUUxQixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRWxELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFNLENBQUMsTUFBTSxHQUFDLE9BQU8sRUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNiLFFBQVEsRUFBQyxJQUFJLENBQUMsS0FBSztZQUNuQixLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUs7WUFDaEIsUUFBUSxFQUFDLElBQUksQ0FBQyxRQUFRO1NBQ3ZCLENBQUMsRUFBQyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQzthQUNwQixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsS0FBYztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBdEJZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FFYyxXQUFJO0dBRGxCLFdBQVcsQ0FzQnZCO0FBdEJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0h0dHAsSGVhZGVycyxSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvaHR0cCdcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4J1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJ1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCdcclxuXHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi91c2VyJ1xyXG5pbXBvcnQge0NvbmZpZ30gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2V7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHApe1xyXG4gIFxyXG4gIH1cclxuICByZWdpc3Rlcih1c2VyOlVzZXIpe1xyXG4gICAgbGV0IGhlYWRlcnM9bmV3IEhlYWRlcnMoKTtcclxuICAgIFxyXG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KENvbmZpZy5hcGlVcmwrJ1VzZXJzJyxcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIFVzZXJuYW1lOnVzZXIuZW1haWwsXHJcbiAgICAgICAgRW1haWw6dXNlci5lbWFpbCxcclxuICAgICAgICBQYXNzd29yZDp1c2VyLnBhc3N3b3JkXHJcbiAgICAgIH0pLHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpXHJcbiAgfVxyXG4gIFxyXG4gIGhhbmRsZUVycm9ycyhlcnJvcjpSZXNwb25zZSl7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICB9XHJcbn0iXX0=