'use strict';
//const fs = require('fs');
import fs from 'fs'
//const path = require('path');
import path from 'path';
//const Sequelize = require('sequelize');
import Sequelize from 'sequelize'
//const process = require('process');
//import process from 'process';
//const basename = path.basename("");
import  config  from '../../config/db.js';

const db = new Sequelize(config.database,config.username,config.password,config)

export default db;


