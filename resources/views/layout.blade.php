<!DOCTYPE html>
<html lang="en">
@include('web.layout.head')

<body>
    @include('web.layout.header')
    @yield('content')
    @include('web.layout.footer')
</body>

</html>
