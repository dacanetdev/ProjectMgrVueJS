<template>
    <div>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand pull-left" href="#">{{projectName}}</a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <router-link to="/" tag="li" activeClass="active"><a>Gallery</a></router-link>
              <router-link to="/dashboard" tag="li" activeClass="active"><a>Dashboard</a></router-link>
              <router-link to="/projects" tag="li" activeClass="active"><a>Projects</a></router-link>
              <router-link to="/users" tag="li" activeClass="active"><a>Users</a></router-link>
            </ul>

          </div><!--/.nav-collapse -->
        </div>
      </nav>
    </div>
</template>

<script>
  export default {
    name: 'app-header',
    props: ['projectName']
  }
</script>
