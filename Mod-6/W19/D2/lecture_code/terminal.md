753d8b8784e8   hello-world                      "/hello"                 20 hours ago     Exited (0) 20 hours ago                              youthful_jemison
f2cb2b1e54d6   bradsimpson213/today_react_app   "docker-entrypoint.s…"   6 months ago     Exited (255) 5 months ago   0.0.0.0:3000->3000/tcp   unruffled_meninsky
c278df35d987   postgres                         "docker-entrypoint.s…"   6 months ago     Exited (255) 5 months ago   5432/tcp                 postgres2
776f929aa366   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (255) 5 months ago   0.0.0.0:8000->80/tcp     infallible_swartz
4ef68dd237e4   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              c4
e59ac71a58a6   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              c3
be5f664a76a6   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              c2
64ee70e1abe0   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              c1
267a68afa136   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              nice_austin
7e1f906b8157   nginx                            "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              dazzling_napier
bradsimpson@Brads-Air ~ % docker image ls
REPOSITORY                          TAG       IMAGE ID       CREATED         SIZE
bradsimpson213/today_react_app      latest    d8e7ecd3ca38   6 months ago    510MB
bradsimpson213/tuesday_taco_react   latest    446d5c626877   7 months ago    584MB
bradsimpson213/taco_tues-react      latest    55fd07fce2ca   8 months ago    581MB
ubuntu                              latest    e343402cadef   8 months ago    69.2MB
bradsimpson213/my_fancy_app         latest    2e962f4183bc   9 months ago    578MB
bradsimpson213/patch                latest    85fd9d51fbc4   9 months ago    113MB
<none>                              <none>    23d8681bdbcf   9 months ago    113MB
<none>                              <none>    8442fa932634   9 months ago    113MB
bradsimpson213/patchstagram         latest    fdb3d88cc9df   9 months ago    144MB
<none>                              <none>    1be486eb8e9e   9 months ago    814MB
<none>                              <none>    f6211611ef7b   9 months ago    814MB
<none>                              <none>    ec44781411c1   9 months ago    814MB
<none>                              <none>    e3758b5271b3   9 months ago    814MB
bradsimpson213/my_flask_starter     latest    5a987801c667   9 months ago    1.21GB
bradsimpson213/my_flask_starter     <none>    5106d41fd79a   9 months ago    1.21GB
<none>                              <none>    3e9c435ed215   9 months ago    1.23GB
bradsimpson213/my_starter           latest    982c7b107bb2   9 months ago    976MB
bradsimpson213/my_starter           <none>    d67adf9f658a   9 months ago    976MB
bradsimpson213/my_starter           <none>    8c2a30d1ab93   9 months ago    976MB
bradsimpson213/my_starter           <none>    887a2903d7f6   9 months ago    976MB
bradsimpson213/my_starter           <none>    6afd10397145   9 months ago    976MB
bradsimpson213/my_starter           <none>    31b768bb850b   9 months ago    994MB
bradsimpson213/aptil_react_taco     latest    08caba4d9ff4   10 months ago   575MB
<none>                              <none>    6277c82a8b27   10 months ago   113MB
postgres                            latest    ee56d70bcdf1   10 months ago   433MB
bradsimpson213/my_react_app         latest    0e6d1fad2b08   11 months ago   451MB
bradsimpson213/taco_react           latest    aea6ddf0f44b   12 months ago   569MB
nginx                               alpine    66bf2c914bf4   12 months ago   41MB
alpine                              latest    5053b247d78b   12 months ago   7.66MB
nginx                               latest    2d21d843073b   12 months ago   192MB
hello-world                         latest    b038788ddb22   13 months ago   9.14kB
bradsimpson@Brads-Air ~ % \clear

bradsimpson@Brads-Air ~ % docker container run -d -p 8080:80 nginx
3ac88a18f5abfed48b5f98e4d092ed1cba2fe484cb254bec269c85d793a940c3
bradsimpson@Brads-Air ~ % docker container ls
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                  NAMES
3ac88a18f5ab   nginx     "/docker-entrypoint.…"   10 seconds ago   Up 9 seconds    0.0.0.0:8080->80/tcp   jolly_meitner
92f11000ad7e   nginx     "/docker-entrypoint.…"   10 minutes ago   Up 10 minutes   0.0.0.0:8000->80/tcp   eager_roentgen
bradsimpson@Brads-Air ~ % docker container run --name test -it alpine sh
/ # exit
bradsimpson@Brads-Air ~ % docker container run --name greet_me --rm ubuntu echo hello world
hello world
bradsimpson@Brads-Air ~ % docker container ls
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                  NAMES
3ac88a18f5ab   nginx     "/docker-entrypoint.…"   6 minutes ago    Up 6 minutes    0.0.0.0:8080->80/tcp   jolly_meitner
92f11000ad7e   nginx     "/docker-entrypoint.…"   16 minutes ago   Up 16 minutes   0.0.0.0:8000->80/tcp   eager_roentgen
bradsimpson@Brads-Air ~ % docker container ls -a
CONTAINER ID   IMAGE                            COMMAND                  CREATED          STATUS                      PORTS                    NAMES
016dcdcd5e67   alpine                           "sh"                     3 minutes ago    Exited (0) 2 minutes ago                             test
3ac88a18f5ab   nginx                            "/docker-entrypoint.…"   6 minutes ago    Up 6 minutes                0.0.0.0:8080->80/tcp     jolly_meitner
aa2af8f933f9   alpine                           "ash"                    12 minutes ago   Exited (0) 10 minutes ago                            stupefied_shtern
92f11000ad7e   nginx                            "/docker-entrypoint.…"   17 minutes ago   Up 17 minutes               0.0.0.0:8000->80/tcp     eager_roentgen
f02301b1d687   nginx                            "/docker-entrypoint.…"   24 minutes ago   Exited (0) 23 minutes ago                            cool_container
bef51daa2a41   hello-world                      "/hello"                 38 minutes ago   Exited (0) 38 minutes ago                            thirsty_austin
753d8b8784e8   hello-world                      "/hello"                 20 hours ago     Exited (0) 20 hours ago                              youthful_jemison
f2cb2b1e54d6   bradsimpson213/today_react_app   "docker-entrypoint.s…"   6 months ago     Exited (255) 5 months ago   0.0.0.0:3000->3000/tcp   unruffled_meninsky
c278df35d987   postgres                         "docker-entrypoint.s…"   6 months ago     Exited (255) 5 months ago   5432/tcp                 postgres2
776f929aa366   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (255) 5 months ago   0.0.0.0:8000->80/tcp     infallible_swartz
4ef68dd237e4   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              c4
e59ac71a58a6   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              c3
be5f664a76a6   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              c2
64ee70e1abe0   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              c1
267a68afa136   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              nice_austin
7e1f906b8157   nginx                            "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              dazzling_napier
bradsimpson@Brads-Air ~ % docker image ls
REPOSITORY                          TAG       IMAGE ID       CREATED         SIZE
bradsimpson213/today_react_app      latest    d8e7ecd3ca38   6 months ago    510MB
bradsimpson213/tuesday_taco_react   latest    446d5c626877   7 months ago    584MB
bradsimpson213/taco_tues-react      latest    55fd07fce2ca   8 months ago    581MB
ubuntu                              latest    e343402cadef   8 months ago    69.2MB
bradsimpson213/my_fancy_app         latest    2e962f4183bc   9 months ago    578MB
bradsimpson213/patch                latest    85fd9d51fbc4   9 months ago    113MB
<none>                              <none>    23d8681bdbcf   9 months ago    113MB
<none>                              <none>    8442fa932634   9 months ago    113MB
bradsimpson213/patchstagram         latest    fdb3d88cc9df   9 months ago    144MB
<none>                              <none>    1be486eb8e9e   9 months ago    814MB
<none>                              <none>    f6211611ef7b   9 months ago    814MB
<none>                              <none>    ec44781411c1   9 months ago    814MB
<none>                              <none>    e3758b5271b3   9 months ago    814MB
bradsimpson213/my_flask_starter     latest    5a987801c667   9 months ago    1.21GB
bradsimpson213/my_flask_starter     <none>    5106d41fd79a   9 months ago    1.21GB
<none>                              <none>    3e9c435ed215   9 months ago    1.23GB
bradsimpson213/my_starter           latest    982c7b107bb2   9 months ago    976MB
bradsimpson213/my_starter           <none>    d67adf9f658a   9 months ago    976MB
bradsimpson213/my_starter           <none>    8c2a30d1ab93   9 months ago    976MB
bradsimpson213/my_starter           <none>    887a2903d7f6   9 months ago    976MB
bradsimpson213/my_starter           <none>    6afd10397145   9 months ago    976MB
bradsimpson213/my_starter           <none>    31b768bb850b   9 months ago    994MB
bradsimpson213/aptil_react_taco     latest    08caba4d9ff4   10 months ago   575MB
<none>                              <none>    6277c82a8b27   10 months ago   113MB
postgres                            latest    ee56d70bcdf1   10 months ago   433MB
bradsimpson213/my_react_app         latest    0e6d1fad2b08   11 months ago   451MB
bradsimpson213/taco_react           latest    aea6ddf0f44b   12 months ago   569MB
nginx                               alpine    66bf2c914bf4   12 months ago   41MB
alpine                              latest    5053b247d78b   12 months ago   7.66MB
nginx                               latest    2d21d843073b   12 months ago   192MB
hello-world                         latest    b038788ddb22   13 months ago   9.14kB
bradsimpson@Brads-Air ~ % doxcker network ls
zsh: command not found: doxcker
bradsimpson@Brads-Air ~ % docker network ls 
NETWORK ID     NAME             DRIVER    SCOPE
4c844715c1e8   bridge           bridge    local
0c4794c37db6   host             host      local
255e708645d9   my_new_network   bridge    local
61b3161ebf7d   none             null      local
bradsimpson@Brads-Air ~ % docker volume ls
DRIVER    VOLUME NAME
local     my_taco_tues
local     taco_tuesday
local     tuesday_taco
bradsimpson@Brads-Air ~ % docker container ls -l
CONTAINER ID   IMAGE     COMMAND   CREATED         STATUS                     PORTS     NAMES
016dcdcd5e67   alpine    "sh"      4 minutes ago   Exited (0) 4 minutes ago             test
bradsimpson@Brads-Air ~ % docker container ls -la
CONTAINER ID   IMAGE     COMMAND   CREATED         STATUS                     PORTS     NAMES
016dcdcd5e67   alpine    "sh"      4 minutes ago   Exited (0) 4 minutes ago             test
bradsimpson@Brads-Air ~ % docker container ls -al
CONTAINER ID   IMAGE     COMMAND   CREATED         STATUS                     PORTS     NAMES
016dcdcd5e67   alpine    "sh"      4 minutes ago   Exited (0) 4 minutes ago             test
bradsimpson@Brads-Air ~ % docker container ls -a 
CONTAINER ID   IMAGE                            COMMAND                  CREATED          STATUS                      PORTS                    NAMES
016dcdcd5e67   alpine                           "sh"                     4 minutes ago    Exited (0) 4 minutes ago                             test
3ac88a18f5ab   nginx                            "/docker-entrypoint.…"   8 minutes ago    Up 8 minutes                0.0.0.0:8080->80/tcp     jolly_meitner
aa2af8f933f9   alpine                           "ash"                    14 minutes ago   Exited (0) 12 minutes ago                            stupefied_shtern
92f11000ad7e   nginx                            "/docker-entrypoint.…"   18 minutes ago   Up 18 minutes               0.0.0.0:8000->80/tcp     eager_roentgen
f02301b1d687   nginx                            "/docker-entrypoint.…"   26 minutes ago   Exited (0) 24 minutes ago                            cool_container
bef51daa2a41   hello-world                      "/hello"                 40 minutes ago   Exited (0) 39 minutes ago                            thirsty_austin
753d8b8784e8   hello-world                      "/hello"                 20 hours ago     Exited (0) 20 hours ago                              youthful_jemison
f2cb2b1e54d6   bradsimpson213/today_react_app   "docker-entrypoint.s…"   6 months ago     Exited (255) 5 months ago   0.0.0.0:3000->3000/tcp   unruffled_meninsky
c278df35d987   postgres                         "docker-entrypoint.s…"   6 months ago     Exited (255) 5 months ago   5432/tcp                 postgres2
776f929aa366   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (255) 5 months ago   0.0.0.0:8000->80/tcp     infallible_swartz
4ef68dd237e4   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              c4
e59ac71a58a6   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              c3
be5f664a76a6   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              c2
64ee70e1abe0   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              c1
267a68afa136   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              nice_austin
7e1f906b8157   nginx                            "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              dazzling_napier
bradsimpson@Brads-Air ~ % docker container ls -ll
CONTAINER ID   IMAGE     COMMAND   CREATED         STATUS                     PORTS     NAMES
016dcdcd5e67   alpine    "sh"      5 minutes ago   Exited (0) 4 minutes ago             test
bradsimpson@Brads-Air ~ % docker container ls    
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                  NAMES
3ac88a18f5ab   nginx     "/docker-entrypoint.…"   8 minutes ago    Up 8 minutes    0.0.0.0:8080->80/tcp   jolly_meitner
92f11000ad7e   nginx     "/docker-entrypoint.…"   19 minutes ago   Up 19 minutes   0.0.0.0:8000->80/tcp   eager_roentgen
bradsimpson@Brads-Air ~ % docker container stop 3ac88a18f5ab eager_roentgen 
3ac88a18f5ab
eager_roentgen
bradsimpson@Brads-Air ~ % docker container ls                               
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
bradsimpson@Brads-Air ~ % docker container ls -a
CONTAINER ID   IMAGE                            COMMAND                  CREATED          STATUS                      PORTS                    NAMES
016dcdcd5e67   alpine                           "sh"                     6 minutes ago    Exited (0) 6 minutes ago                             test
3ac88a18f5ab   nginx                            "/docker-entrypoint.…"   10 minutes ago   Exited (0) 11 seconds ago                            jolly_meitner
aa2af8f933f9   alpine                           "ash"                    16 minutes ago   Exited (0) 14 minutes ago                            stupefied_shtern
92f11000ad7e   nginx                            "/docker-entrypoint.…"   20 minutes ago   Exited (0) 11 seconds ago                            eager_roentgen
f02301b1d687   nginx                            "/docker-entrypoint.…"   28 minutes ago   Exited (0) 26 minutes ago                            cool_container
bef51daa2a41   hello-world                      "/hello"                 42 minutes ago   Exited (0) 42 minutes ago                            thirsty_austin
753d8b8784e8   hello-world                      "/hello"                 20 hours ago     Exited (0) 20 hours ago                              youthful_jemison
f2cb2b1e54d6   bradsimpson213/today_react_app   "docker-entrypoint.s…"   6 months ago     Exited (255) 5 months ago   0.0.0.0:3000->3000/tcp   unruffled_meninsky
c278df35d987   postgres                         "docker-entrypoint.s…"   6 months ago     Exited (255) 5 months ago   5432/tcp                 postgres2
776f929aa366   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (255) 5 months ago   0.0.0.0:8000->80/tcp     infallible_swartz
4ef68dd237e4   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              c4
e59ac71a58a6   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              c3
be5f664a76a6   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              c2
64ee70e1abe0   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              c1
267a68afa136   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              nice_austin
7e1f906b8157   nginx                            "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              dazzling_napier
bradsimpson@Brads-Air ~ % docker container start eager_roentgen 
eager_roentgen
bradsimpson@Brads-Air ~ % docker container ls
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS         PORTS                  NAMES
92f11000ad7e   nginx     "/docker-entrypoint.…"   22 minutes ago   Up 6 seconds   0.0.0.0:8000->80/tcp   eager_roentgen
bradsimpson@Brads-Air ~ % docker container rm c1 c2 c3 c4
c1
c2
c3
c4
bradsimpson@Brads-Air ~ % docker container ls -a               
CONTAINER ID   IMAGE                            COMMAND                  CREATED          STATUS                      PORTS                    NAMES
016dcdcd5e67   alpine                           "sh"                     10 minutes ago   Exited (0) 10 minutes ago                            test
3ac88a18f5ab   nginx                            "/docker-entrypoint.…"   13 minutes ago   Exited (0) 3 minutes ago                             jolly_meitner
aa2af8f933f9   alpine                           "ash"                    20 minutes ago   Exited (0) 17 minutes ago                            stupefied_shtern
92f11000ad7e   nginx                            "/docker-entrypoint.…"   24 minutes ago   Up About a minute           0.0.0.0:8000->80/tcp     eager_roentgen
f02301b1d687   nginx                            "/docker-entrypoint.…"   31 minutes ago   Exited (0) 30 minutes ago                            cool_container
bef51daa2a41   hello-world                      "/hello"                 45 minutes ago   Exited (0) 45 minutes ago                            thirsty_austin
753d8b8784e8   hello-world                      "/hello"                 20 hours ago     Exited (0) 20 hours ago                              youthful_jemison
f2cb2b1e54d6   bradsimpson213/today_react_app   "docker-entrypoint.s…"   6 months ago     Exited (255) 5 months ago   0.0.0.0:3000->3000/tcp   unruffled_meninsky
c278df35d987   postgres                         "docker-entrypoint.s…"   6 months ago     Exited (255) 5 months ago   5432/tcp                 postgres2
776f929aa366   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (255) 5 months ago   0.0.0.0:8000->80/tcp     infallible_swartz
267a68afa136   nginx:alpine                     "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              nice_austin
7e1f906b8157   nginx                            "/docker-entrypoint.…"   6 months ago     Exited (0) 6 months ago                              dazzling_napier
bradsimpson@Brads-Air ~ % docker container prune
WARNING! This will remove all stopped containers.
Are you sure you want to continue? [y/N] y
Deleted Containers:
016dcdcd5e678c564f32093e8dbf3a7e240b56d4b4386ba1e6adb1ba3cc2461e
3ac88a18f5abfed48b5f98e4d092ed1cba2fe484cb254bec269c85d793a940c3
aa2af8f933f9116e781d46af9bf180d0fd873fe068378282b257630dc8eb1077
f02301b1d687282aaf2f0952589e9fc47e905956c471c328cde77d32f23ff5b8
bef51daa2a41c07a5c83f1525fd3f027ef6693610cced6141787d646515919f3
753d8b8784e8940f482cdac74c858638952646a16b1dc61688ffa77b104756ac
f2cb2b1e54d6ac4bc20c95d61952319b6f0c30f32767a8822cf99092540f7873
c278df35d9875a24e81057f1192cfe047ba6fd2d8473b77c0fa823caee1f616d
776f929aa366788c1475e1da1ed9ae8f8b7199cb0b488dda977d0ca39eb3d9d2
267a68afa13603c75aaf88da795371ed4ffec2c274e68418e8aaefc6398513b2
7e1f906b8157c9f19694b03bb8c0e604868d73fec4098f0f8932abbf76092dfa

Total reclaimed space: 54.77MB
bradsimpson@Brads-Air ~ % docker container run -p 8000:80 -d nginx
34ee3ed9b74a84e6e30218fae3bfeb0bf337d2fda9a0568293d846d002fea464
docker: Error response from daemon: driver failed programming external connectivity on endpoint clever_noether (8f06005cc7d4506b53f628ffe8efdf0bf84ff5b6dbf9e8ace7104c46c1d350d8): Bind for 0.0.0.0:8000 failed: port is already allocated.
bradsimpson@Brads-Air ~ % docker container run -p 5000:80 -d nginx
44654b107679c624cbe3dda01dc458f69e5e6f9fbe5b34e8a1cbfe7a5a2c26f7
bradsimpson@Brads-Air ~ % docker container ls
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS         PORTS                  NAMES
44654b107679   nginx     "/docker-entrypoint.…"   5 seconds ago    Up 5 seconds   0.0.0.0:5000->80/tcp   hopeful_keller
92f11000ad7e   nginx     "/docker-entrypoint.…"   27 minutes ago   Up 4 minutes   0.0.0.0:8000->80/tcp   eager_roentgen
bradsimpson@Brads-Air ~ % docker container exec -it hopeful_keller sh
# \ls
bin   docker-entrypoint.d   home   mnt	 root  srv  usr
boot  docker-entrypoint.sh  lib    opt	 run   sys  var
dev   etc		    media  proc  sbin  tmp
# cd usr
# \ls
bin  games  include  lib  libexec  local  sbin	share  src
# cd src
# \la
sh: 5: la: not found
# \ls
# ls -ll
total 0
# cd ..
# cd share
# \ls
X11		 debconf      fonts	libgcrypt20  nginx	  tabset
base-files	 debianutils  gcc	lintian      pam	  terminfo
base-passwd	 dict	      gdb	locale	     pam-configs  util-linux
bash-completion  doc	      info	man	     perl5	  xml
bug		 doc-base     java	maven-repo   pixmaps	  zoneinfo
ca-certificates  dpkg	      keyrings	menu	     polkit-1	  zsh
common-licenses  fontconfig   libc-bin	misc	     readline
# cd nginx
# \ls
html
# cd html       
# \ls
50x.html  index.html
# nano index.html
sh: 15: nano: not found
# apk add nano
sh: 16: apk: not found
# exit 
bradsimpson@Brads-Air ~ %               



# NETWORKING


                        "HostIp": "0.0.0.0",
                        "HostPort": "8000"
                    }
                ]
            },
            "SandboxKey": "/var/run/docker/netns/1956e45f9725",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "ecb180c0283099255e9f3cc87fdd33b1d95643eab88b0e591683b0284c088127",
            "Gateway": "172.17.0.1",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "172.17.0.2",
            "IPPrefixLen": 16,
            "IPv6Gateway": "",
            "MacAddress": "02:42:ac:11:00:02",
            "Networks": {
                "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "NetworkID": "3e992cba1716ed9eaf26e9d7545f48ce70f7a04c24b9eb240d6cdade4d073a1a",
                    "EndpointID": "ecb180c0283099255e9f3cc87fdd33b1d95643eab88b0e591683b0284c088127",
                    "Gateway": "172.17.0.1",
                    "IPAddress": "172.17.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:11:00:02",
                    "DriverOpts": null
                }
            }
        }
    }
]
bradsimpson@Brads-Air ~ % docker network ls                      
NETWORK ID     NAME             DRIVER    SCOPE
3e992cba1716   bridge           bridge    local
0c4794c37db6   host             host      local
255e708645d9   my_new_network   bridge    local
61b3161ebf7d   none             null      local
bradsimpson@Brads-Air ~ % docker network create taco_tuesday_network
50f1d8572113bbe303762a48aa9def99d6f7487b71b8d83fd0630fd416ed61e5
bradsimpson@Brads-Air ~ % docker network ls                         
NETWORK ID     NAME                   DRIVER    SCOPE
3e992cba1716   bridge                 bridge    local
0c4794c37db6   host                   host      local
255e708645d9   my_new_network         bridge    local
61b3161ebf7d   none                   null      local
50f1d8572113   taco_tuesday_network   bridge    local
bradsimpson@Brads-Air ~ % docker network prune
WARNING! This will remove all custom networks not used by at least one container.
Are you sure you want to continue? [y/N] n
bradsimpson@Brads-Air ~ % docker network ls   
NETWORK ID     NAME                   DRIVER    SCOPE
3e992cba1716   bridge                 bridge    local
0c4794c37db6   host                   host      local
255e708645d9   my_new_network         bridge    local
61b3161ebf7d   none                   null      local
50f1d8572113   taco_tuesday_network   bridge    local
bradsimpson@Brads-Air ~ % \clear

bradsimpson@Brads-Air ~ % docker container ls
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                  NAMES
44654b107679   nginx     "/docker-entrypoint.…"   26 minutes ago   Up 26 minutes   0.0.0.0:5000->80/tcp   hopeful_keller
92f11000ad7e   nginx     "/docker-entrypoint.…"   53 minutes ago   Up 30 minutes   0.0.0.0:8000->80/tcp   eager_roentgen
bradsimpson@Brads-Air ~ % docker container stop hopeful_keller eager_roentgen
hopeful_keller
eager_roentgen
bradsimpson@Brads-Air ~ % docker container run -d --name c1 --network taco_tuesday_network nginx:alpine
fc207d778aab765533fb276feefa9f2c8a7c138ea664049eb975ec18965882e9
bradsimpson@Brads-Air ~ % docker container run -d --name c2 --network taco_tuesday_network nginx:alpine 
d113a4a022d832ae0caf61011bcdca1a280a99e9fc9835a25dfba3fd56ca9bb8
bradsimpson@Brads-Air ~ % docker container ls
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS     NAMES
d113a4a022d8   nginx:alpine   "/docker-entrypoint.…"   6 seconds ago    Up 5 seconds    80/tcp    c2
fc207d778aab   nginx:alpine   "/docker-entrypoint.…"   17 seconds ago   Up 15 seconds   80/tcp    c1
bradsimpson@Brads-Air ~ % docker container run -d --name c3 nginx:alpine 
32812b953e08438c87045e82093d8e141dbd3c24ce8985c780ee3195140d14b4
bradsimpson@Brads-Air ~ % docker container run -d --name c4 nginx:alpine 
2505bc6f13d6fa3248baa77b98f3edab517669e223a489e246aec72ce19e05ac
bradsimpson@Brads-Air ~ % docker container ls 
CONTAINER ID   IMAGE          COMMAND                  CREATED              STATUS              PORTS     NAMES
2505bc6f13d6   nginx:alpine   "/docker-entrypoint.…"   7 seconds ago        Up 5 seconds        80/tcp    c4
32812b953e08   nginx:alpine   "/docker-entrypoint.…"   14 seconds ago       Up 13 seconds       80/tcp    c3
d113a4a022d8   nginx:alpine   "/docker-entrypoint.…"   About a minute ago   Up About a minute   80/tcp    c2
fc207d778aab   nginx:alpine   "/docker-entrypoint.…"   About a minute ago   Up About a minute   80/tcp    c1
bradsimpson@Brads-Air ~ % docker container inspect c1
[
    {
        "Id": "fc207d778aab765533fb276feefa9f2c8a7c138ea664049eb975ec18965882e9",
        "Created": "2024-06-25T16:22:02.335708792Z",
        "Path": "/docker-entrypoint.sh",
        "Args": [
            "nginx",
            "-g",
            "daemon off;"
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 1494,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2024-06-25T16:22:03.786362125Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:66bf2c914bf4d0aac4b62f09f9f74ad35898d613024a0f2ec94dca9e79fac6ea",
        "ResolvConfPath": "/var/lib/docker/containers/fc207d778aab765533fb276feefa9f2c8a7c138ea664049eb975ec18965882e9/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/fc207d778aab765533fb276feefa9f2c8a7c138ea664049eb975ec18965882e9/hostname",
        "HostsPath": "/var/lib/docker/containers/fc207d778aab765533fb276feefa9f2c8a7c138ea664049eb975ec18965882e9/hosts",
        "LogPath": "/var/lib/docker/containers/fc207d778aab765533fb276feefa9f2c8a7c138ea664049eb975ec18965882e9/fc207d778aab765533fb276feefa9f2c8a7c138ea664049eb975ec18965882e9-json.log",
        "Name": "/c1",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": null,
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "taco_tuesday_network",
            "PortBindings": {},
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": null,
            "ConsoleSize": [
                63,
                102
            ],
            "CapAdd": null,
            "CapDrop": null,
            "CgroupnsMode": "private",
            "Dns": [],
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "BlkioDeviceReadBps": [],
            "BlkioDeviceWriteBps": [],
            "BlkioDeviceReadIOps": [],
            "BlkioDeviceWriteIOps": [],
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": [],
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": null,
            "PidsLimit": null,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/asound",
                "/proc/acpi",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/b245ce1eb80f7f7ebd4540954ac90f08351b5696c63e52bdfbdc42da32ece44f-init/diff:/var/lib/docker/overlay2/647a1f9e4c9b6c7373dda8cc6bfaf043643937900e08999038352818a01cd05c/diff:/var/lib/docker/overlay2/24725ff88ecb44d283bed4fbaa517a5e0e5cbae124c0607064a08e01403b6452/diff:/var/lib/docker/overlay2/42fce0a44605c073f0f80eab7e94426685255d5b9cf53811f57b22aabb2e5787/diff:/var/lib/docker/overlay2/343ffb4ee390b1071933b39cc22e679d0196b73f19fa8b10c72873bfe77effaf/diff:/var/lib/docker/overlay2/e50487c91c51ba1602a6c8776b58b5383a37f6b14f249736a87588f2a831aa60/diff:/var/lib/docker/overlay2/c45ae8da3e73d60ad3833e00105d832c8252039e8f0b0ed181644f936c01d6f9/diff:/var/lib/docker/overlay2/3e6a64f7d286c79f617a6adc7832a2fdddee4bd877816812952da86c482edfe8/diff:/var/lib/docker/overlay2/ead025bc032cd2b273c109b69f2dc045b12f5474a097ee4c2f59525d0d62398d/diff",
                "MergedDir": "/var/lib/docker/overlay2/b245ce1eb80f7f7ebd4540954ac90f08351b5696c63e52bdfbdc42da32ece44f/merged",
                "UpperDir": "/var/lib/docker/overlay2/b245ce1eb80f7f7ebd4540954ac90f08351b5696c63e52bdfbdc42da32ece44f/diff",
                "WorkDir": "/var/lib/docker/overlay2/b245ce1eb80f7f7ebd4540954ac90f08351b5696c63e52bdfbdc42da32ece44f/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [],
        "Config": {
            "Hostname": "fc207d778aab",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "80/tcp": {}
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "NGINX_VERSION=1.25.1",
                "PKG_RELEASE=1",
                "NJS_VERSION=0.7.12"
            ],
            "Cmd": [
                "nginx",
                "-g",
                "daemon off;"
            ],
            "Image": "nginx:alpine",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": [
                "/docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": {
                "maintainer": "NGINX Docker Maintainers \u003cdocker-maint@nginx.com\u003e"
            },
            "StopSignal": "SIGQUIT"
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "fc8007a2c2928bcc31c2e754b98394d97b92a83e5e6a1d0e88e11c9951e1d83d",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {
                "80/tcp": null
            },
            "SandboxKey": "/var/run/docker/netns/fc8007a2c292",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "",
            "Gateway": "",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "",
            "IPPrefixLen": 0,
            "IPv6Gateway": "",
            "MacAddress": "",
            "Networks": {
                "taco_tuesday_network": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": [
                        "fc207d778aab"
                    ],
                    "NetworkID": "50f1d8572113bbe303762a48aa9def99d6f7487b71b8d83fd0630fd416ed61e5",
                    "EndpointID": "ce40f160f346774e983ce3724f16b1ee5e41a3dc01e015640eb8fe4bd6710656",
                    "Gateway": "172.19.0.1",
                    "IPAddress": "172.19.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:13:00:02",
                    "DriverOpts": null
                }
            }
        }
    }
]
bradsimpson@Brads-Air ~ % docker container inspect c2 
[
    {
        "Id": "d113a4a022d832ae0caf61011bcdca1a280a99e9fc9835a25dfba3fd56ca9bb8",
        "Created": "2024-06-25T16:22:13.746235546Z",
        "Path": "/docker-entrypoint.sh",
        "Args": [
            "nginx",
            "-g",
            "daemon off;"
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 1641,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2024-06-25T16:22:13.945110505Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:66bf2c914bf4d0aac4b62f09f9f74ad35898d613024a0f2ec94dca9e79fac6ea",
        "ResolvConfPath": "/var/lib/docker/containers/d113a4a022d832ae0caf61011bcdca1a280a99e9fc9835a25dfba3fd56ca9bb8/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/d113a4a022d832ae0caf61011bcdca1a280a99e9fc9835a25dfba3fd56ca9bb8/hostname",
        "HostsPath": "/var/lib/docker/containers/d113a4a022d832ae0caf61011bcdca1a280a99e9fc9835a25dfba3fd56ca9bb8/hosts",
        "LogPath": "/var/lib/docker/containers/d113a4a022d832ae0caf61011bcdca1a280a99e9fc9835a25dfba3fd56ca9bb8/d113a4a022d832ae0caf61011bcdca1a280a99e9fc9835a25dfba3fd56ca9bb8-json.log",
        "Name": "/c2",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": null,
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "taco_tuesday_network",
            "PortBindings": {},
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": null,
            "ConsoleSize": [
                63,
                102
            ],
            "CapAdd": null,
            "CapDrop": null,
            "CgroupnsMode": "private",
            "Dns": [],
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "BlkioDeviceReadBps": [],
            "BlkioDeviceWriteBps": [],
            "BlkioDeviceReadIOps": [],
            "BlkioDeviceWriteIOps": [],
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": [],
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": null,
            "PidsLimit": null,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/asound",
                "/proc/acpi",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/a69d93706a8b12c613f2e5e88a37171d3634133fc9b4e63577ad8855b99bf50f-init/diff:/var/lib/docker/overlay2/647a1f9e4c9b6c7373dda8cc6bfaf043643937900e08999038352818a01cd05c/diff:/var/lib/docker/overlay2/24725ff88ecb44d283bed4fbaa517a5e0e5cbae124c0607064a08e01403b6452/diff:/var/lib/docker/overlay2/42fce0a44605c073f0f80eab7e94426685255d5b9cf53811f57b22aabb2e5787/diff:/var/lib/docker/overlay2/343ffb4ee390b1071933b39cc22e679d0196b73f19fa8b10c72873bfe77effaf/diff:/var/lib/docker/overlay2/e50487c91c51ba1602a6c8776b58b5383a37f6b14f249736a87588f2a831aa60/diff:/var/lib/docker/overlay2/c45ae8da3e73d60ad3833e00105d832c8252039e8f0b0ed181644f936c01d6f9/diff:/var/lib/docker/overlay2/3e6a64f7d286c79f617a6adc7832a2fdddee4bd877816812952da86c482edfe8/diff:/var/lib/docker/overlay2/ead025bc032cd2b273c109b69f2dc045b12f5474a097ee4c2f59525d0d62398d/diff",
                "MergedDir": "/var/lib/docker/overlay2/a69d93706a8b12c613f2e5e88a37171d3634133fc9b4e63577ad8855b99bf50f/merged",
                "UpperDir": "/var/lib/docker/overlay2/a69d93706a8b12c613f2e5e88a37171d3634133fc9b4e63577ad8855b99bf50f/diff",
                "WorkDir": "/var/lib/docker/overlay2/a69d93706a8b12c613f2e5e88a37171d3634133fc9b4e63577ad8855b99bf50f/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [],
        "Config": {
            "Hostname": "d113a4a022d8",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "80/tcp": {}
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "NGINX_VERSION=1.25.1",
                "PKG_RELEASE=1",
                "NJS_VERSION=0.7.12"
            ],
            "Cmd": [
                "nginx",
                "-g",
                "daemon off;"
            ],
            "Image": "nginx:alpine",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": [
                "/docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": {
                "maintainer": "NGINX Docker Maintainers \u003cdocker-maint@nginx.com\u003e"
            },
            "StopSignal": "SIGQUIT"
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "988f41c359d0fcfa5f88649b2875ecb0f4e604582091cf4d9603249bca5cf9dc",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {
                "80/tcp": null
            },
            "SandboxKey": "/var/run/docker/netns/988f41c359d0",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "",
            "Gateway": "",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "",
            "IPPrefixLen": 0,
            "IPv6Gateway": "",
            "MacAddress": "",
            "Networks": {
                "taco_tuesday_network": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": [
                        "d113a4a022d8"
                    ],
                    "NetworkID": "50f1d8572113bbe303762a48aa9def99d6f7487b71b8d83fd0630fd416ed61e5",
                    "EndpointID": "0094e200a9609c396c992ff8e3d950a5d0c822c1fc1c32239a9554ba1eea822a",
                    "Gateway": "172.19.0.1",
                    "IPAddress": "172.19.0.3",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:13:00:03",
                    "DriverOpts": null
                }
            }
        }
    }
]
bradsimpson@Brads-Air ~ % docker container inspect c3 
[
    {
        "Id": "32812b953e08438c87045e82093d8e141dbd3c24ce8985c780ee3195140d14b4",
        "Created": "2024-06-25T16:23:07.462897752Z",
        "Path": "/docker-entrypoint.sh",
        "Args": [
            "nginx",
            "-g",
            "daemon off;"
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 1870,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2024-06-25T16:23:07.62454046Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:66bf2c914bf4d0aac4b62f09f9f74ad35898d613024a0f2ec94dca9e79fac6ea",
        "ResolvConfPath": "/var/lib/docker/containers/32812b953e08438c87045e82093d8e141dbd3c24ce8985c780ee3195140d14b4/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/32812b953e08438c87045e82093d8e141dbd3c24ce8985c780ee3195140d14b4/hostname",
        "HostsPath": "/var/lib/docker/containers/32812b953e08438c87045e82093d8e141dbd3c24ce8985c780ee3195140d14b4/hosts",
        "LogPath": "/var/lib/docker/containers/32812b953e08438c87045e82093d8e141dbd3c24ce8985c780ee3195140d14b4/32812b953e08438c87045e82093d8e141dbd3c24ce8985c780ee3195140d14b4-json.log",
        "Name": "/c3",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": null,
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "default",
            "PortBindings": {},
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": null,
            "ConsoleSize": [
                63,
                102
            ],
            "CapAdd": null,
            "CapDrop": null,
            "CgroupnsMode": "private",
            "Dns": [],
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "BlkioDeviceReadBps": [],
            "BlkioDeviceWriteBps": [],
            "BlkioDeviceReadIOps": [],
            "BlkioDeviceWriteIOps": [],
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": [],
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": null,
            "PidsLimit": null,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/asound",
                "/proc/acpi",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/09e148b0a37331feada8b0b3055d678cd235c656872fa20dab7fb1247559be3d-init/diff:/var/lib/docker/overlay2/647a1f9e4c9b6c7373dda8cc6bfaf043643937900e08999038352818a01cd05c/diff:/var/lib/docker/overlay2/24725ff88ecb44d283bed4fbaa517a5e0e5cbae124c0607064a08e01403b6452/diff:/var/lib/docker/overlay2/42fce0a44605c073f0f80eab7e94426685255d5b9cf53811f57b22aabb2e5787/diff:/var/lib/docker/overlay2/343ffb4ee390b1071933b39cc22e679d0196b73f19fa8b10c72873bfe77effaf/diff:/var/lib/docker/overlay2/e50487c91c51ba1602a6c8776b58b5383a37f6b14f249736a87588f2a831aa60/diff:/var/lib/docker/overlay2/c45ae8da3e73d60ad3833e00105d832c8252039e8f0b0ed181644f936c01d6f9/diff:/var/lib/docker/overlay2/3e6a64f7d286c79f617a6adc7832a2fdddee4bd877816812952da86c482edfe8/diff:/var/lib/docker/overlay2/ead025bc032cd2b273c109b69f2dc045b12f5474a097ee4c2f59525d0d62398d/diff",
                "MergedDir": "/var/lib/docker/overlay2/09e148b0a37331feada8b0b3055d678cd235c656872fa20dab7fb1247559be3d/merged",
                "UpperDir": "/var/lib/docker/overlay2/09e148b0a37331feada8b0b3055d678cd235c656872fa20dab7fb1247559be3d/diff",
                "WorkDir": "/var/lib/docker/overlay2/09e148b0a37331feada8b0b3055d678cd235c656872fa20dab7fb1247559be3d/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [],
        "Config": {
            "Hostname": "32812b953e08",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "80/tcp": {}
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "NGINX_VERSION=1.25.1",
                "PKG_RELEASE=1",
                "NJS_VERSION=0.7.12"
            ],
            "Cmd": [
                "nginx",
                "-g",
                "daemon off;"
            ],
            "Image": "nginx:alpine",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": [
                "/docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": {
                "maintainer": "NGINX Docker Maintainers \u003cdocker-maint@nginx.com\u003e"
            },
            "StopSignal": "SIGQUIT"
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "be74c987130a960d79d2942888aae47f2b42d85463e4769b08656a96d4c15952",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {
                "80/tcp": null
            },
            "SandboxKey": "/var/run/docker/netns/be74c987130a",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "2586b0d758d063ba3b4455e801ffd82e9fb7aa43660dbede350a36bfb37e7db7",
            "Gateway": "172.17.0.1",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "172.17.0.2",
            "IPPrefixLen": 16,
            "IPv6Gateway": "",
            "MacAddress": "02:42:ac:11:00:02",
            "Networks": {
                "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "NetworkID": "7310fdb67e04ed5b2b7037e462f7351e00c6fc4a7710149777797bc74ea67ba9",
                    "EndpointID": "2586b0d758d063ba3b4455e801ffd82e9fb7aa43660dbede350a36bfb37e7db7",
                    "Gateway": "172.17.0.1",
                    "IPAddress": "172.17.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:11:00:02",
                    "DriverOpts": null
                }
            }
        }
    }
]
bradsimpson@Brads-Air ~ % docker container inspect c4 
[
    {
        "Id": "2505bc6f13d6fa3248baa77b98f3edab517669e223a489e246aec72ce19e05ac",
        "Created": "2024-06-25T16:23:14.922968755Z",
        "Path": "/docker-entrypoint.sh",
        "Args": [
            "nginx",
            "-g",
            "daemon off;"
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 2007,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2024-06-25T16:23:15.143994672Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:66bf2c914bf4d0aac4b62f09f9f74ad35898d613024a0f2ec94dca9e79fac6ea",
        "ResolvConfPath": "/var/lib/docker/containers/2505bc6f13d6fa3248baa77b98f3edab517669e223a489e246aec72ce19e05ac/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/2505bc6f13d6fa3248baa77b98f3edab517669e223a489e246aec72ce19e05ac/hostname",
        "HostsPath": "/var/lib/docker/containers/2505bc6f13d6fa3248baa77b98f3edab517669e223a489e246aec72ce19e05ac/hosts",
        "LogPath": "/var/lib/docker/containers/2505bc6f13d6fa3248baa77b98f3edab517669e223a489e246aec72ce19e05ac/2505bc6f13d6fa3248baa77b98f3edab517669e223a489e246aec72ce19e05ac-json.log",
        "Name": "/c4",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": null,
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "default",
            "PortBindings": {},
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": null,
            "ConsoleSize": [
                63,
                102
            ],
            "CapAdd": null,
            "CapDrop": null,
            "CgroupnsMode": "private",
            "Dns": [],
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "BlkioDeviceReadBps": [],
            "BlkioDeviceWriteBps": [],
            "BlkioDeviceReadIOps": [],
            "BlkioDeviceWriteIOps": [],
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": [],
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": null,
            "PidsLimit": null,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/asound",
                "/proc/acpi",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/a6bc904c91bcde801b214bbb1b4195daa5ed6171a052e56704b71dfccbd08bd0-init/diff:/var/lib/docker/overlay2/647a1f9e4c9b6c7373dda8cc6bfaf043643937900e08999038352818a01cd05c/diff:/var/lib/docker/overlay2/24725ff88ecb44d283bed4fbaa517a5e0e5cbae124c0607064a08e01403b6452/diff:/var/lib/docker/overlay2/42fce0a44605c073f0f80eab7e94426685255d5b9cf53811f57b22aabb2e5787/diff:/var/lib/docker/overlay2/343ffb4ee390b1071933b39cc22e679d0196b73f19fa8b10c72873bfe77effaf/diff:/var/lib/docker/overlay2/e50487c91c51ba1602a6c8776b58b5383a37f6b14f249736a87588f2a831aa60/diff:/var/lib/docker/overlay2/c45ae8da3e73d60ad3833e00105d832c8252039e8f0b0ed181644f936c01d6f9/diff:/var/lib/docker/overlay2/3e6a64f7d286c79f617a6adc7832a2fdddee4bd877816812952da86c482edfe8/diff:/var/lib/docker/overlay2/ead025bc032cd2b273c109b69f2dc045b12f5474a097ee4c2f59525d0d62398d/diff",
                "MergedDir": "/var/lib/docker/overlay2/a6bc904c91bcde801b214bbb1b4195daa5ed6171a052e56704b71dfccbd08bd0/merged",
                "UpperDir": "/var/lib/docker/overlay2/a6bc904c91bcde801b214bbb1b4195daa5ed6171a052e56704b71dfccbd08bd0/diff",
                "WorkDir": "/var/lib/docker/overlay2/a6bc904c91bcde801b214bbb1b4195daa5ed6171a052e56704b71dfccbd08bd0/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [],
        "Config": {
            "Hostname": "2505bc6f13d6",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "80/tcp": {}
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "NGINX_VERSION=1.25.1",
                "PKG_RELEASE=1",
                "NJS_VERSION=0.7.12"
            ],
            "Cmd": [
                "nginx",
                "-g",
                "daemon off;"
            ],
            "Image": "nginx:alpine",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": [
                "/docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": {
                "maintainer": "NGINX Docker Maintainers \u003cdocker-maint@nginx.com\u003e"
            },
            "StopSignal": "SIGQUIT"
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "8212385f31da558739e359885b3a5e886a650aac5252f1c398dadff801652e7c",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {
                "80/tcp": null
            },
            "SandboxKey": "/var/run/docker/netns/8212385f31da",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "c36fa5baf6ac57dbd26c60c74de8677f357820570254d3479495b0463b08a6ff",
            "Gateway": "172.17.0.1",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "172.17.0.3",
            "IPPrefixLen": 16,
            "IPv6Gateway": "",
            "MacAddress": "02:42:ac:11:00:03",
            "Networks": {
                "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "NetworkID": "7310fdb67e04ed5b2b7037e462f7351e00c6fc4a7710149777797bc74ea67ba9",
                    "EndpointID": "c36fa5baf6ac57dbd26c60c74de8677f357820570254d3479495b0463b08a6ff",
                    "Gateway": "172.17.0.1",
                    "IPAddress": "172.17.0.3",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:11:00:03",
                    "DriverOpts": null
                }
            }
        }
    }
]
bradsimpson@Brads-Air ~ % docker container exec -it c1 ash
/ # ping -c 4 c2 
PING c2 (172.19.0.3): 56 data bytes
64 bytes from 172.19.0.3: seq=0 ttl=64 time=0.513 ms
64 bytes from 172.19.0.3: seq=1 ttl=64 time=0.213 ms
64 bytes from 172.19.0.3: seq=2 ttl=64 time=0.105 ms
64 bytes from 172.19.0.3: seq=3 ttl=64 time=0.116 ms

--- c2 ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max = 0.105/0.236/0.513 ms
/ # ping -c 4 c3 
ping: bad address 'c3'
/ # exit
bradsimpson@Brads-Air ~ % docker container exec -it c3 ash 
/ # ping -c 4 c4
ping: bad address 'c4'
/ # ping -c 4 172.17.0.3
PING 172.17.0.3 (172.17.0.3): 56 data bytes
64 bytes from 172.17.0.3: seq=0 ttl=64 time=0.577 ms
64 bytes from 172.17.0.3: seq=1 ttl=64 time=0.116 ms
64 bytes from 172.17.0.3: seq=2 ttl=64 time=0.148 ms
64 bytes from 172.17.0.3: seq=3 ttl=64 time=0.143 ms

--- 172.17.0.3 ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max = 0.116/0.246/0.577 ms
/ # 



# BIND MOUNTS & VOLUMES


            ],
            "Image": "sha256:92c6e333aa36edb1932ac4198c20f986e32ad86ebd3c71bac7005ce622a6412c",
            "Volumes": {
                "/var/lib/postgresql/data": {}
            },
            "WorkingDir": "",
            "Entrypoint": [
                "docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": null,
            "StopSignal": "SIGINT"
        },
        "Architecture": "arm64",
        "Variant": "v8",
        "Os": "linux",
        "Size": 433237434,
        "VirtualSize": 433237434,
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/19c2c0fd488f257ec64ccf2debc443f8d7b2fb51b6b424507b12dad8ceced5a2/diff:/var/lib/docker/overlay2/720cfe7bbf41f9167a5fd897387c047d1bd0b0788cbc76be818c124b40b9a2fc/diff:/var/lib/docker/overlay2/9ef2f2492f5d7b33f6842bcaa73544a5827441b370d59019178746eecc897887/diff:/var/lib/docker/overlay2/098e106cd4ce7d71eea1122353cfa08e6521f041a813df4e610aaa7db533fd44/diff:/var/lib/docker/overlay2/b524502fc40aece8a126f52872ffccdf33c8fd18eeb9896a73bbd37015162ce5/diff:/var/lib/docker/overlay2/82809c2f97a7559d2fc6bdd9ed979c89ddb5c62f689ca8dd8434aad7640f3cef/diff:/var/lib/docker/overlay2/2fd26a6716c4892966fdd7caf05ae2642c03c3e2c9cbc5afab58dd380bd5c4ee/diff:/var/lib/docker/overlay2/7651afd27ca6e197a766ffec66f5b77825ff7a28995c07ae0c878b9c3adde831/diff:/var/lib/docker/overlay2/033e377d2a69f2b5d8db1c9d16b65c47942292f658e8f72e06acf41007c25880/diff:/var/lib/docker/overlay2/494c1f85e9803b52bc30144d2937350c16dd654a3006dbe4a5d729497e0f72f6/diff:/var/lib/docker/overlay2/c18e7cdc5c90c2494b09769891c51c5f39fc475fc11a79c21493f1baa3beb564/diff:/var/lib/docker/overlay2/b0b9235892d66406d3e465349a8d3bb35f2f913af34c6ee5b5ea35da390ceb0c/diff",
                "MergedDir": "/var/lib/docker/overlay2/20fbafa167fcf3207196a945fa86cd01387bc47d52e362b965e6ff1c89058887/merged",
                "UpperDir": "/var/lib/docker/overlay2/20fbafa167fcf3207196a945fa86cd01387bc47d52e362b965e6ff1c89058887/diff",
                "WorkDir": "/var/lib/docker/overlay2/20fbafa167fcf3207196a945fa86cd01387bc47d52e362b965e6ff1c89058887/work"
            },
            "Name": "overlay2"
        },
        "RootFS": {
            "Type": "layers",
            "Layers": [
                "sha256:1c3daa06574284614db07a23682ab6d1c344f09f8093ee10e5de4152a51677a1",
                "sha256:310729fcb068da6941441d9627a3d8979e7dbd015c220324331e34af28b7e20c",
                "sha256:6cc6868915f4c4d399ec0026fd321acfd0b92e84cd2a51076e89041b3e3118b6",
                "sha256:10e10c831ae45343e95ad309a6e12d4248559f9dcffe3ca5b099044dfb1ced6e",
                "sha256:efeb668f57b52b8fe563c95296cd13a75431ab67e7a3b557b72ba4ef8d66e5de",
                "sha256:7df7b7f4d502154fb5a18da05456d5c74d9f70248a33112213c9469bb297470c",
                "sha256:79f05f53fceaaeffa6f88270b63f5b50d8359b7f66d6fb99a7ae2ebface34634",
                "sha256:f051436a55899d9ef6c1f7a74e487575a9d27e6046c0938ac49825972ada314e",
                "sha256:7cfa7dde137d5b682278bc5a0a6b5bec23ae142ddcec996d86faa2eec65ddaa3",
                "sha256:5bcc055db6d18a9f0252d404cecccfdb200a0124f510082bd6a95bb11e9ab5ae",
                "sha256:41961c2bd4aabfda25d4260d75f79052fd1f5a0c1645df7c43f3c2b3c711c794",
                "sha256:0e77db6aa900fe556e68e07ae83c1ba2008cd4a33b50e7f2898153731df0a104",
                "sha256:2a315bcee097176f1ba5a2916416eb2e40ef7348eba15212d3d95494af541b2e"
            ]
        },
        "Metadata": {
            "LastTagTime": "0001-01-01T00:00:00Z"
        }
    }
]
bradsimpson@Brads-Air ~ % \clear

bradsimpson@Brads-Air ~ % docker container run -e POSTGRES_PASSWORD=password --name postgres1 --mount type=volume,source=feb_taco_tues,target=/var/lib/postgresql/data postgres
The files belonging to this database system will be owned by user "postgres".
This user must also own the server process.

The database cluster will be initialized with locale "en_US.utf8".
The default database encoding has accordingly been set to "UTF8".
The default text search configuration will be set to "english".

Data page checksums are disabled.

fixing permissions on existing directory /var/lib/postgresql/data ... ok
creating subdirectories ... ok
selecting dynamic shared memory implementation ... posix
selecting default max_connections ... 100
selecting default shared_buffers ... 128MB
selecting default time zone ... Etc/UTC
creating configuration files ... ok
running bootstrap script ... ok
performing post-bootstrap initialization ... ok
syncing data to disk ... ok

initdb: warning: enabling "trust" authentication for local connections
initdb: hint: You can change this by editing pg_hba.conf or using the option -A, or --auth-local and --auth-host, the next time you run initdb.

Success. You can now start the database server using:

    pg_ctl -D /var/lib/postgresql/data -l logfile start

waiting for server to start....2024-06-25 17:23:43.954 UTC [48] LOG:  starting PostgreSQL 15.4 (Debian 15.4-1.pgdg120+1) on aarch64-unknown-linux-gnu, compiled by gcc (Debian 12.2.0-14) 12.2.0, 64-bit
2024-06-25 17:23:43.955 UTC [48] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2024-06-25 17:23:43.957 UTC [51] LOG:  database system was shut down at 2024-06-25 17:23:43 UTC
2024-06-25 17:23:43.960 UTC [48] LOG:  database system is ready to accept connections
 done
server started

/usr/local/bin/docker-entrypoint.sh: ignoring /docker-entrypoint-initdb.d/*

2024-06-25 17:23:44.088 UTC [48] LOG:  received fast shutdown request
waiting for server to shut down....2024-06-25 17:23:44.089 UTC [48] LOG:  aborting any active transactions
2024-06-25 17:23:44.090 UTC [48] LOG:  background worker "logical replication launcher" (PID 54) exited with exit code 1
2024-06-25 17:23:44.091 UTC [49] LOG:  shutting down
2024-06-25 17:23:44.091 UTC [49] LOG:  checkpoint starting: shutdown immediate
2024-06-25 17:23:44.095 UTC [49] LOG:  checkpoint complete: wrote 3 buffers (0.0%); 0 WAL file(s) added, 0 removed, 0 recycled; write=0.002 s, sync=0.001 s, total=0.005 s; sync files=2, longest=0.001 s, average=0.001 s; distance=0 kB, estimate=0 kB
2024-06-25 17:23:44.098 UTC [48] LOG:  database system is shut down
 done
server stopped

PostgreSQL init process complete; ready for start up.

2024-06-25 17:23:44.209 UTC [1] LOG:  starting PostgreSQL 15.4 (Debian 15.4-1.pgdg120+1) on aarch64-unknown-linux-gnu, compiled by gcc (Debian 12.2.0-14) 12.2.0, 64-bit
2024-06-25 17:23:44.209 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
2024-06-25 17:23:44.209 UTC [1] LOG:  listening on IPv6 address "::", port 5432
2024-06-25 17:23:44.211 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2024-06-25 17:23:44.213 UTC [62] LOG:  database system was shut down at 2024-06-25 17:23:44 UTC
2024-06-25 17:23:44.216 UTC [1] LOG:  database system is ready to accept connections
^C2024-06-25 17:23:56.631 UTC [1] LOG:  received fast shutdown request
2024-06-25 17:23:56.634 UTC [1] LOG:  aborting any active transactions
2024-06-25 17:23:56.636 UTC [1] LOG:  background worker "logical replication launcher" (PID 65) exited with exit code 1
2024-06-25 17:23:56.636 UTC [60] LOG:  shutting down
2024-06-25 17:23:56.638 UTC [60] LOG:  checkpoint starting: shutdown immediate
2024-06-25 17:23:56.644 UTC [60] LOG:  checkpoint complete: wrote 3 buffers (0.0%); 0 WAL file(s) added, 0 removed, 0 recycled; write=0.002 s, sync=0.001 s, total=0.008 s; sync files=2, longest=0.001 s, average=0.001 s; distance=0 kB, estimate=0 kB
2024-06-25 17:23:56.647 UTC [1] LOG:  database system is shut down
bradsimpson@Brads-Air ~ % docker container ls
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                  NAMES
64bda8516e91   nginx:alpine   "/docker-entrypoint.…"   14 minutes ago   Up 14 minutes   0.0.0.0:8000->80/tcp   elegant_hellman
bradsimpson@Brads-Air ~ % docker container run -e POSTGRES_PASSWORD=password --name postgres1 --mount type=volume,source=feb_taco_tues,target=/var/lib/postgresql/data -d postgres
docker: Error response from daemon: Conflict. The container name "/postgres1" is already in use by container "f306900202398e4f0999663f4d21d31c2d023cbfa75cec2af558d680b23f6f6a". You have to remove (or rename) that container to be able to reuse that name.
See 'docker run --help'.
bradsimpson@Brads-Air ~ % docker container run -e POSTGRES_PASSWORD=password --name postgres2 --mount type=volume,source=feb_taco_tues,target=/var/lib/postgresql/data -d postgres 
5558832a20f5ba7b2290b0e5f0a78f3e59eae25f5548bc974a1e8e11d76d7509
bradsimpson@Brads-Air ~ % dpcker container ls
zsh: command not found: dpcker
bradsimpson@Brads-Air ~ % docker container ls
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                  NAMES
5558832a20f5   postgres       "docker-entrypoint.s…"   16 seconds ago   Up 15 seconds   5432/tcp               postgres2
64bda8516e91   nginx:alpine   "/docker-entrypoint.…"   15 minutes ago   Up 15 minutes   0.0.0.0:8000->80/tcp   elegant_hellman
bradsimpson@Brads-Air ~ % docker container exec -it postgres2
"docker container exec" requires at least 2 arguments.
See 'docker container exec --help'.

Usage:  docker container exec [OPTIONS] CONTAINER COMMAND [ARG...]

Execute a command in a running container
bradsimpson@Brads-Air ~ % docker container exec -it postgres2
"docker container exec" requires at least 2 arguments.
See 'docker container exec --help'.

Usage:  docker container exec [OPTIONS] CONTAINER COMMAND [ARG...]

Execute a command in a running container
bradsimpson@Brads-Air ~ % docker container exec -it postgres2 sh 
# psql -p 5432 -h localhost -U postgres
psql (15.4 (Debian 15.4-1.pgdg120+1))
Type "help" for help.

postgres=# \l
                                                List of databases
   Name    |  Owner   | Encoding |  Collate   |   Ctype    | ICU Locale | Locale Provider |   Acces
s privileges   
-----------+----------+----------+------------+------------+------------+-----------------+--------
---------------
 postgres  | postgres | UTF8     | en_US.utf8 | en_US.utf8 |            | libc            | 
 template0 | postgres | UTF8     | en_US.utf8 | en_US.utf8 |            | libc            | =c/post
gres          +
           |          |          |            |            |            |                 | postgre
s=CTc/postgres
 template1 | postgres | UTF8     | en_US.utf8 | en_US.utf8 |            | libc            | =c/post
gres          +
           |          |          |            |            |            |                 | postgre
s=CTc/postgres
(3 rows)


















































postgres=# CREATE DATABASE taco_tuesday WITH OWNER postgres;
CREATE DATABASE
postgres=# \l
                                                  List of databases
     Name     |  Owner   | Encoding |  Collate   |   Ctype    | ICU Locale | Locale Provider |   Ac
cess privileges   
--------------+----------+----------+------------+------------+------------+-----------------+-----
------------------
 postgres     | postgres | UTF8     | en_US.utf8 | en_US.utf8 |            | libc            | 
 taco_tuesday | postgres | UTF8     | en_US.utf8 | en_US.utf8 |            | libc            | 
 template0    | postgres | UTF8     | en_US.utf8 | en_US.utf8 |            | libc            | =c/p
ostgres          +
              |          |          |            |            |            |                 | post
gres=CTc/postgres
 template1    | postgres | UTF8     | en_US.utf8 | en_US.utf8 |            | libc            | =c/p
ostgres          +
              |          |          |            |            |            |                 | post
gres=CTc/postgres
(4 rows


postgres=# exit
# exit
bradsimpson@Brads-Air ~ % docker container ls
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                  NAMES
5558832a20f5   postgres       "docker-entrypoint.s…"   3 minutes ago    Up 3 minutes    5432/tcp               postgres2
64bda8516e91   nginx:alpine   "/docker-entrypoint.…"   18 minutes ago   Up 18 minutes   0.0.0.0:8000->80/tcp   elegant_hellman
bradsimpson@Brads-Air ~ % docker container stop poatgres2
Error response from daemon: No such container: poatgres2
bradsimpson@Brads-Air ~ % docker container stop 5558832a20f5
5558832a20f5
bradsimpson@Brads-Air ~ % docker container ls -a
CONTAINER ID   IMAGE          COMMAND                  CREATED             STATUS                         PORTS                  NAMES
5558832a20f5   postgres       "docker-entrypoint.s…"   4 minutes ago       Exited (0) 6 seconds ago                              postgres2
f30690020239   postgres       "docker-entrypoint.s…"   5 minutes ago       Exited (0) 5 minutes ago                              postgres1
64bda8516e91   nginx:alpine   "/docker-entrypoint.…"   19 minutes ago      Up 19 minutes                  0.0.0.0:8000->80/tcp   elegant_hellman
2505bc6f13d6   nginx:alpine   "/docker-entrypoint.…"   About an hour ago   Exited (0) 22 minutes ago                             c4
32812b953e08   nginx:alpine   "/docker-entrypoint.…"   About an hour ago   Exited (0) 22 minutes ago                             c3
d113a4a022d8   nginx:alpine   "/docker-entrypoint.…"   About an hour ago   Exited (0) 22 minutes ago                             c2
fc207d778aab   nginx:alpine   "/docker-entrypoint.…"   About an hour ago   Exited (0) 22 minutes ago                             c1
44654b107679   nginx          "/docker-entrypoint.…"   2 hours ago         Exited (0) About an hour ago                          hopeful_keller
34ee3ed9b74a   nginx          "/docker-entrypoint.…"   2 hours ago         Created                                               clever_noether
92f11000ad7e   nginx          "/docker-entrypoint.…"   2 hours ago         Exited (0) About an hour ago                          eager_roentgen
bradsimpson@Brads-Air ~ % docker container prune
WARNING! This will remove all stopped containers.
Are you sure you want to continue? [y/N] y
Deleted Containers:
5558832a20f5ba7b2290b0e5f0a78f3e59eae25f5548bc974a1e8e11d76d7509
f306900202398e4f0999663f4d21d31c2d023cbfa75cec2af558d680b23f6f6a
2505bc6f13d6fa3248baa77b98f3edab517669e223a489e246aec72ce19e05ac
32812b953e08438c87045e82093d8e141dbd3c24ce8985c780ee3195140d14b4
d113a4a022d832ae0caf61011bcdca1a280a99e9fc9835a25dfba3fd56ca9bb8
fc207d778aab765533fb276feefa9f2c8a7c138ea664049eb975ec18965882e9
44654b107679c624cbe3dda01dc458f69e5e6f9fbe5b34e8a1cbfe7a5a2c26f7
34ee3ed9b74a84e6e30218fae3bfeb0bf337d2fda9a0568293d846d002fea464
92f11000ad7e218736e002ed69d010a966d0d9142d30d38d7e421736fde3ec9d

Total reclaimed space: 6.681kB
bradsimpson@Brads-Air ~ % docker container ls -a
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                  NAMES
64bda8516e91   nginx:alpine   "/docker-entrypoint.…"   19 minutes ago   Up 19 minutes   0.0.0.0:8000->80/tcp   elegant_hellman
bradsimpson@Brads-Air ~ % docker container run -e POSTGRES_PASSWORD=password --name postgres3 --mount type=volume,source=feb_taco_tues,target=/var/lib/postgresql/data -d postgres
5e4e19033fd9a8467a6a2f31ac722a44ecd5aca66f1ede2ba55c70153e88c62c
bradsimpson@Brads-Air ~ % docker container exec -it postgres3 sh
# psql -p 5432 -h localhost -U postgres
psql (15.4 (Debian 15.4-1.pgdg120+1))
Type "help" for help.

postgres=# \l
                                                  List of databases
     Name     |  Owner   | Encoding |  Collate   |   Ctype    | ICU Locale | Locale Provider |   Ac
cess privileges   
--------------+----------+----------+------------+------------+------------+-----------------+-----
------------------
 postgres     | postgres | UTF8     | en_US.utf8 | en_US.utf8 |            | libc            | 
 taco_tuesday | postgres | UTF8     | en_US.utf8 | en_US.utf8 |            | libc            | 
 template0    | postgres | UTF8     | en_US.utf8 | en_US.utf8 |            | libc            | =c/p
ostgres          +
              |          |          |            |            |            |                 | post
gres=CTc/postgres
 template1    | postgres | UTF8     | en_US.utf8 | en_US.utf8 |            | libc            | =c/p
ostgres          +
              |          |          |            |            |            |                 | post
gres=CTc/postgres
(4 rows)

postgres=# exit
# exit
bradsimpson@Brads-Air ~ % 
