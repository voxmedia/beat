# -*- encoding: utf-8 -*-
# stub: jekyll-autoprefixer 1.0.1 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-autoprefixer"
  s.version = "1.0.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Vincent Wochnik"]
  s.date = "2016-11-29"
  s.description = "Autoprefixer integration for Jekyll"
  s.email = ["v.wochnik@gmail.com"]
  s.homepage = "https://github.com/vwochnik/jekyll-autoprefixer"
  s.licenses = ["MIT"]
  s.required_ruby_version = Gem::Requirement.new(">= 1.9.3")
  s.rubygems_version = "2.4.5"
  s.summary = "This plugin provides simple autoprefixer support for Jekyll."

  s.installed_by_version = "2.4.5" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<autoprefixer-rails>, ["~> 6.3.6"])
      s.add_development_dependency(%q<jekyll>, ["~> 3.1.2"])
      s.add_development_dependency(%q<bundler>, ["~> 1.6"])
    else
      s.add_dependency(%q<autoprefixer-rails>, ["~> 6.3.6"])
      s.add_dependency(%q<jekyll>, ["~> 3.1.2"])
      s.add_dependency(%q<bundler>, ["~> 1.6"])
    end
  else
    s.add_dependency(%q<autoprefixer-rails>, ["~> 6.3.6"])
    s.add_dependency(%q<jekyll>, ["~> 3.1.2"])
    s.add_dependency(%q<bundler>, ["~> 1.6"])
  end
end
